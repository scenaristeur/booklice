<template>
  <div>

    <div>
    <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Using sub-components:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <div>Selected: <strong>{{ selected }}</strong></div>
  </div>

  <hr>
    <div>
      <div>
        <b-card-group deck>
          <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="light" header="Light" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card header="Default" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>


    <hr>



    <div>
      <b-card-group columns>
        <b-card
        title="Card title that wraps to a new line"
        img-src="https://placekitten.com/g/400/450"
        img-alt="Image"
        img-top
        >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
      </b-card>

      <b-card header="Quote">
        <blockquote class="blockquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </b-card>

      <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>

      <b-card bg-variant="primary" text-variant="white">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>
            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
          </footer>
        </blockquote>
      </b-card>

      <b-card>
        <b-card-title>Title</b-card-title>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>

      <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

      <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Footer Text</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
    }
  }
</script>

<style>

</style>
