import {
  getSolidDataset,
  getThingAll,
  getFile,
  isRawData,
  getContentType,
  saveFileInContainer,
  getContainedResourceUrlAll,
  getStringNoLocaleAll,
  //createContainerAt,
  getSourceUrl,
  deleteFile,
  removeAll,
  //deleteContainer,
  addStringNoLocale,
  setThing,
  saveSolidDatasetAt,
  createSolidDataset,
  createThing,
  addUrl,
  overwriteFile,
  getStringNoLocale,
  getThing,
  getUrlAll,
  getUrl,
  //  addDatetime,
  setUrl,
  setStringNoLocale,
  //setDatetime
} from "@inrupt/solid-client";
import { FOAF, /*LDP,*/ VCARD,  RDF, AS  } from "@inrupt/vocab-common-rdf";
import { WS, /*, VCARD */} from "@inrupt/vocab-solid-common";
import * as sc from '@inrupt/solid-client-authn-browser'
import router from '@/router'
// import {
//   WebsocketNotification,
// } from "@inrupt/solid-client-notifications";
// import * as jsonld from 'jsonld';


const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$login= async function(issuer) {

      try{
        await sc.login({
          oidcIssuer: issuer,
          redirectUrl: window.location.href,
          clientName: "Booklice",
        });
      } catch(e){
        alert("$login "+e)
      }
    },

    Vue.prototype.$logout = async function(params){
      try{
        let session = sc.getDefaultSession()
        console.log(params)
        await session.logout()
        store.commit('solid/setSession',session)
        store.commit('solid/setPod', {})
        store.commit('booklice/setPath', "")
      } catch(e){
        alert("$logout "+e)
      }
    },

    Vue.prototype.$checkSessions = async function( params){
      console.log("params",params)
      console.log("window.location.href", window.location.href)
      let session = sc.getDefaultSession()
      console.log("session",session)

      //  let session = sc.getDefaultSession()
      sc.onSessionRestore((url) => {
        console.log("restore",url)
        let query = url.split('?')[1]
        console.log('query', query)
        // const p = new URLSearchParams(url);
        // //  if(p.length>0){
        // console.log("params Params", p.values)
        //}

        //  alert ("url",url)
        router.push({path: '?'+query})
        store.commit('solid/setSession',session)
        //  dispatch('getPodInfos', session)
        this.$getPodInfosFromSession(session)
      });


      try{
        await sc.handleIncomingRedirect({restorePreviousSession : params.restore, url: window.location.href})
        .then((info) => {
          console.log(info)
        })
        store.commit('solid/setSession',session)
        //  dispatch('getPodInfos', session)
        this.$getPodInfosFromSession(session)

      } catch(e){
        alert("$checkSessions " +e)
      }
    },

    Vue.prototype.$getPodInfosFromSession = async function(session){
      try{
        let pod = {}
        pod.logged = session.info.isLoggedIn
        if (pod.logged) {
          pod.webId = session.info.webId
          pod = await this.$getPodInfos(pod)
          store.commit('solid/setPod', pod)
          if (pod.storage != null){
            this.$setCurrentThingUrl(pod.storage)
            store.commit('booklice/setPath', pod.storage+'public/bookmarks/')
            //let publicTagFile = pod.storage+'public/tags.ttl'
            //let privateTagFile = podStorage+'private/tags.ttl'
            // let tags = await this.$getTags(publicTagFile)
            // console.log("############################tags",tags)
          }
        }else{
          store.commit('solid/setPod', null)
          store.commit('solid/setThings', [])
        }
      } catch(e){
        alert("$getPodInfosFromSession "+e)
      }
    }

    Vue.prototype.$setCurrentThingUrl = async function( url){
      try{
        const file = await getFile(url, {fetch: sc.fetch});
        // file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
        console.log(
          `Fetched a ${getContentType(file)} file from ${getSourceUrl(file)}.`
        );
        console.log(`The file is ${isRawData(file) ? "not " : ""}a dataset.`);

        store.commit('solid/setCurrentRemoteUrl',url)

        if(isRawData(file)){
          console.log("todo raw data", file)
          var reader = new FileReader();
          reader.addEventListener("loadend", function() {
            console.log(reader)
            //  console.log(reader.result)
            store.commit('vatch/setFile', {
              path: getSourceUrl(file),
              content : reader.result,
              type:{mime: getContentType(file)}
            }, { root: true })
            // reader.result contient le contenu du
            // blob sous la forme d'un tableau typé
          });
          reader.readAsText(file);
        }else{
          const myDataset = await getSolidDataset( url, {fetch: sc.fetch});
          console.log(myDataset)

          let resources = await getContainedResourceUrlAll(myDataset,{fetch: sc.fetch} )
          console.log("Resources", resources)
          if(resources.length > 0){
            store.commit('solid/setRemoteResources',resources)
          }else{
            const things = await getThingAll(
              myDataset,
              url
            );
            store.commit('solid/setThings',things)
          }
        }
      }
      catch(e){
        alert("$setCurrentThingUrl "+e)
      }

    },

    Vue.prototype.$getPodInfos = async function(pod){
      try{
        const dataset = await getSolidDataset( pod.webId, { fetch: sc.fetch });
        console.log("DATASET", dataset)
        let profile = await getThing( dataset, pod.webId );
        pod.name = await getStringNoLocale(profile, FOAF.name);
        pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        pod.storage = await getUrl(profile, WS.storage);
        pod.photo = await getUrl(profile, VCARD.hasPhoto);
        // pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
        // store.commit("vatch/addToNetwork", pod.publicTags)
        //this.$subscribe(pod.storage)
        console.log("getpodinfos",pod)
      }catch(e)
      {
        console.log("erreur",e, pod)
      }
      return await pod
    },

    // Vue.prototype.$getTags = async function (tagFile){
    //   try{
    //
    //     let tagsJ = await parseTagsJsonld(tagFile)
    //     console.log("tags JSONLD",tagsJ)
    //
    //     let tagsR = await parseTagsRdf(tagFile)
    //     console.log("tags RDF",tagsR)
    //
    //     const tagDataset = await getSolidDataset( tagFile, { fetch: sc.fetch });
    //     console.log("DATASET", tagDataset)
    //     let things =  await getThingAll(tagDataset, tagFile);
    //     console.log(things)
    //
    //     return tagsR
    //   }catch(e){
    //     return []
    //   }
    // }
    Vue.prototype.$getResources = async function(path){
      console.log("reading", path)
      const myDataset = await getSolidDataset( path, {fetch: sc.fetch});
      console.log(myDataset)

      let resources = await getContainedResourceUrlAll(myDataset,{fetch: sc.fetch} )
      console.log("Resources", resources)
      // let res = []
      // for await (const r of resources) {
      //   res.push(await getResource(r))
      // }

      //  let res = resources.map(async function(x) {return await getResource(x)})
      //  return resources
      store.commit('booklice/setResources', resources)
    },

    Vue.prototype.$getResource = async function(r){
      let dataset = await getSolidDataset(r, { fetch: sc.fetch });
      //  console.log(dataset)
      let th = await getThingAll(dataset)
      //  console.log('th',th)
      let thing = th[0]
      //  console.log(thing)
      let title = await getStringNoLocale(thing, AS.name);
      let text = await getStringNoLocale(thing, AS.content);
      let url = await getUrl(thing, AS.url)
      let tagsUrls = await getUrlAll(thing, AS.tag).map(u => {return {url: u}})
      let tagsStrings = await getStringNoLocaleAll(thing, AS.tag).map(t => {return {text: t}})
      let tags = tagsUrls.concat(tagsStrings)
    //  console.log("tags", tags)
      return {path: r, thing: thing, title: title, text: text, url: url, tags: tags}
    },

Vue.prototype.$wikidataLabel = async function(uri){
  let wikidata = 'http://www.wikidata.org/entity/'
    const API_URL = 'https://www.wikidata.org/w/api.php?action=wbgetentities&origin=*&format=json'
    let language =  navigator.language.split("-")[0] || 'en'
    language+='|en'

      let id = uri.split(wikidata)[1]
      //  console.log(splitext)
      //  try{
      let search_url = API_URL+"&ids="+id+"&props=labels&languages="+language
      const res = await fetch(search_url)
      //  console.log(res)
      const json = await res.json()
      let label
      try{
        label = json.entities[id].labels[language] != undefined ? json.entities[id].labels[language].value : json.entities[id].labels.en.value
      }
      catch(e){
        console.log(e,json.entities)
      }
      return label
},
    Vue.prototype.$addBookmark = async function(n){
      console.log(n)
      let bookliceWall = "https://booklice.solidweb.org/public/bookmarks/"
      let bm
      let date = new Date()
      let name = Date.now();
      let thing

      if (n.thing != undefined){
        bm =  await getSolidDataset(n.path, {fetch: sc.fetch})
        name = n.thing.url.split("#")[1]
        console.log("get thing", name)
        thing = await getThing(bm, n.thing.url)
        console.log("replace", thing)
        thing = setUrl(thing, RDF.type, AS.Note);
        thing = setStringNoLocale(thing, AS.name, n.title);
        thing = setStringNoLocale(thing, AS.content, n.text);
        n.url != undefined ? thing = setUrl(thing, AS.url, n.url ) : ""
        thing = setStringNoLocale(thing, AS.updated, date.toISOString());
        thing = removeAll(thing, AS.tag)
      }else{
        bm = await createSolidDataset()
        thing = await createThing({name: name})
        console.log("create", thing)
        thing = addUrl(thing, RDF.type, AS.Note);
        thing = addStringNoLocale(thing, AS.name, n.title);
        thing = addStringNoLocale(thing, AS.content, n.text);
        n.url != undefined ? thing = addUrl(thing, AS.url, n.url ) : ""
        thing = addUrl(thing, AS.actor, store.state.solid.pod.webId );
        thing = addStringNoLocale(thing, AS.published, date.toISOString());
      }
      n.tags.forEach((t) => {
        console.log("tag",t)
        thing = t.url != undefined && t.url.length > 0 ? addUrl(thing, AS.tag, t.url) : addStringNoLocale(thing, AS.tag, t.text)
      });

      console.log("todo : use setDatetime, addDatetime")

      console.log(bm)

      let thingInDs = setThing(bm, thing);
      let savedThing
      let container

      console.log(thingInDs)
      if (n.thing != undefined){
        console.log("replace", thing)
        savedThing  = await saveSolidDatasetAt(n.path, thingInDs, { fetch: sc.fetch } );
        container = n.path.substr(0, n.path.lastIndexOf("/") + 1);

      }else{
        console.log("new", thing)
        savedThing  = await saveSolidDatasetAt(n.path+name+'.ttl', thingInDs, { fetch: sc.fetch } );
        container = n.path

      }

      if(n.share == true){
        console.log("share")
        let sharedThing  = await saveSolidDatasetAt(bookliceWall+name+'.ttl', thingInDs, { fetch: sc.fetch } );
        console.log("sharedThing", sharedThing)
      }
      console.log(thing)
      console.log("File saved",savedThing);
      console.log("container", container)
      await this.$getResources(container)
    },

    Vue.prototype.$addTags = async function(params){
      let tagDataset
      try{
        tagDataset = await getSolidDataset(params.tagFile, {fetch: sc.fetch});
        console.log("DATASET", tagDataset)
      }catch(e){
        //  console.log(e)
      }
      //  console.log(tagDataset)
      tagDataset== undefined || tagDataset== null ? tagDataset = createSolidDataset() :""

      let thing, thingInDs;
      //thing = addUrl(thing, RDF.type, LDP.Resource);
      params.tags.forEach((t) => {
        console.log("add",t.subject, t.predicate.value, t.object.concepturi )
        //  console.log(thing == undefined || thing ==null, thing)
        //thing == undefined || thing ==null ?  thing = getThing(tagDataset, params.tagFile+"#"+t.subject) : ""
        thing == undefined || thing ==null ?  thing = getThing(tagDataset, t.subject) : ""
        //  console.log(thing)
        //  thing == null ? thing = createThing({name: t.subject}) : ""
        thing == null ? thing = createThing({url: t.subject}) : ""
        //  console.log(thing)
        thing = addUrl(thing, t.predicate.value, t.object.concepturi);

      });
      thingInDs = setThing(tagDataset, thing);


      let savedThing = await saveSolidDatasetAt(params.tagFile, thingInDs, { fetch: sc.fetch } );
      console.log("File saved",savedThing);
    },

    Vue.prototype.$uploadLocalToPod = async function(params){
      try{
        console.log(params)

        if(params.dest == undefined){
          alert ("Please select a destination")
          return
        }


        let type = params.type && params.type.mime || "plain/text"
        let distIsDirectory = params.dest.endsWith('/')
        let srcIsDirectory = params.event == "addDir"

        if (srcIsDirectory){
          console.info("todo src is directory")
        }else{

          if(distIsDirectory){
            params.parts == undefined ? params.parts = params.path.split(store.state.vatch.pathsep) : ""
            let slug = encodeURIComponent(params.parts.pop())
            const savedFile = await saveFileInContainer(
              params.dest,
              new Blob([params.content], { type: type }),
              { slug: slug, fetch: sc.fetch }
            );

            console.log(`File saved at ${getSourceUrl(savedFile)}`);
            this.$setCurrentThingUrl(params.dest)
          }else{

            let answer = confirm("Are you sure you want to replace "+params.dest);
            if (answer == true)
            {
              const savedFile = await overwriteFile(
                params.dest,
                new Blob([params.content], { type: type }),
                { fetch: sc.fetch }
                // Or in Node:
                // Buffer.from("This is a plain piece of text", "utf8"), { type: "plain/text" })
              );
              console.log("File saved!", savedFile);
            }
          }
        }
      } catch(e){
        alert("$uploadLocalToPod "+e)
      }
    },

    // Vue.prototype.$createFile = async function(params){
    //   try{
    //     let type = params.type && params.type.mime || "plain/text"
    //     let slug = encodeURIComponent(params.filename)
    //     const savedFile = await saveFileInContainer(
    //       params.dest,
    //       new Blob([params.content || ""], { type: type }),
    //       { slug: slug, fetch: sc.fetch }
    //     );
    //     console.log(`File saved at ${getSourceUrl(savedFile)}`);
    //     this.$setCurrentThingUrl(params.dest)
    //   } catch(e){
    //     alert("$createFile",e)
    //   }
    // },
    //
    // Vue.prototype.$createFolder = async function(params){
    //   try{
    //     let url = params.dest+encodeURIComponent(params.foldername)
    //     const savedFolder = await createContainerAt(url, {fetch: sc.fetch});
    //     console.log(`Folder saved at ${getSourceUrl(savedFolder)}`);
    //     this.$setCurrentThingUrl(params.dest)
    //   } catch(e){
    //     alert("$createFolder",e)
    //   }
    // },


    Vue.prototype.$remove = async function(n){
      console.log("N",n)
      try{
        await deleteFile(
          n.path, { fetch: sc.fetch }
        );
        console.log(" deleted !",n.path);
        let container = n.path.substr(0, n.path.lastIndexOf("/") + 1);
        await this.$getResources(container)
      } catch(e){
        console.log(e)
        alert("$remove "+e)
      }

    }

    //
    // async function getResource(r){
    //   let dataset = await getSolidDataset(r, { fetch: sc.fetch });
    //   console.log(dataset)
    //   let th = await getThingAll(dataset)
    //   console.log('th',th)
    //   let thing = th[0]
    //   console.log(thing)
    //   let title = await getStringNoLocale(thing, AS.name);
    //   let text = await getStringNoLocale(thing, AS.content);
    //   let url = await getUrl(thing, AS.url)
    //   return {path: r, thing: thing, title: title, text: text, url: url}
    // }

    // Vue.prototype.$subscribe = async function(resourceURL){
    //
    //   const gateway = "https://notification.pod.inrupt.com/";
    //
    //   const websocket = new WebsocketNotification(
    //     resourceURL,
    //     { fetch: sc.fetch, gateway }
    //   );
    //   console.log("Subscription to", resourceURL)
    //   websocket.on("connected", () =>
    //   console.log("connected", websocket)
    //   // setMessages((prev) => [
    //   //   ...prev,
    //   //   `Websocket connected; watching ${podRoot}`,
    //   // ])
    // );
    //
    // websocket.on("message", (message) =>
    // {
    //   console.log('message', JSON.parse(message))
    // }
    //   // setMessages((prev) => [...prev, formatMessage(message)])
    // );
    //
    // websocket.on("closed", () =>
    // console.log("websocket closed")
    // //  setMessages((prev) => [...prev, "Websocket closed"])
    // );
    //
    // websocket.on("error", (error) => {
    //   /* eslint no-console: 0 */
    //   console.error(error);
    //   // setMessages((prev) => [
    //   //   ...prev,
    //   //   "Websocket error (see console for details)",
    //   // ]);
    // });
    //
    //   // websocket.on("message", console.log);
    //   // websocket.on("*", console.log);
    //   // websocket.on("connect", console.log);
    //   // websocket.on("CREATE", console.log);
    //
    //   websocket.connect();
    // }


    ////////////////////////////



    // async function parseTagsRdf(url){
    //   let graph = {nodes: [], edges: []}
    //   console.log("parseTagsRdf",url)
    //   try{
    //
    //     let dataset = await getSolidDataset(url, { fetch: sc.fetch });
    //     console.log(dataset)
    //     await dataset._quads.forEach(async function (q)  {
    //       let [s,p,o] = [
    //         {id:q.subject.id, label: await lastPart(q.subject.id)},
    //         q.predicate.id,
    //         {id:q.object.id, label: await lastPart(q.object.id)}
    //       ]
    //       //  console.log(s,p,o)
    //       var indexS = graph.nodes.findIndex(x => x.id==s.id);
    //       indexS === -1 ? graph.nodes.push(s) : "" //console.log("object already exists")
    //       var indexO = graph.nodes.findIndex(x => x.id==o.id);
    //       indexO === -1 ? graph.nodes.push(o) : "" //console.log("object already exists")
    //       let edge = {from: s.id, to: o.id, label: await lastPart(p)}
    //       var indexP = graph.edges.findIndex(x => x.from==edge.from && x.to == edge.to && x.label == edge.label);
    //       indexP === -1 ? graph.edges.push(edge) : ""//console.log("object already exists")
    //     });
    //   }
    //   catch(e){
    //     console.log(e)
    //   }
    //
    //   console.log(graph)
    //   return graph
    // }

    // async function parseTagsJsonld(url){
    //   let documentLoaderType = 'xhr'
    //   await jsonld.useDocumentLoader(documentLoaderType/*, options*/);
    //   let doc = await jsonld.documentLoader(url, function(err) {
    //     if(err) {
    //       alert(err)
    //     }
    //   })
    //   doc.jsonld = JSON.parse(doc.document)
    //   doc.jsonld.forEach((t) => {
    //     console.log(t)
    //
    //   });
    //
    //   //  delete doc.document
    //   //  console.log(doc)
    //   return doc
    // }

    // async function lastPart(text){
    //   //  console.log(text, typeof text)
    //   let wikidata = 'http://www.wikidata.org/entity/'
    //   const API_URL = 'https://www.wikidata.org/w/api.php?action=wbgetentities&origin=*&format=json'
    //   let language =  navigator.language.split("-")[0] || 'en'
    //   language+='|en'
    //
    //   if (text.startsWith(wikidata)){
    //     let splitext = text.split(wikidata)[1]
    //     //  console.log(splitext)
    //     //  try{
    //     let search_url = API_URL+"&ids="+splitext+"&props=labels&languages="+language
    //     const res = await fetch(search_url)
    //     //  console.log(res)
    //     const json = await res.json()
    //     let label
    //     try{
    //       label = json.entities[splitext].labels[language] != undefined ? json.entities[splitext].labels[language].value : json.entities[splitext].labels.en.value
    //     }
    //     catch(e){
    //       console.log(e,json.entities)
    //     }
    //     return label
    //     // this.items = suggestions.search
    //     // console.log(this.items)
    //     // }catch(e){
    //     //   alert(e)
    //     // }
    //
    //   }else if (typeof text == 'object' && text['rdfs:label'] != undefined){
    //     return text['rdfs:label']
    //   }else if (typeof text == 'string' && text.startsWith('http')){
    //     var n = text.lastIndexOf('/');
    //     return text.substring(n + 1);
    //   }
    //   else{
    //     return text
    //   }
    // }


  }
}
// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
