<template>
  <b-container>
    N{{notes}}N
    <b-row>
      <!-- <b-card-group columns> -->
      <b-card
      style="max-width: 20rem;"
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

    <b-card header="Quote"  style="max-width: 20rem;">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card  style="max-width: 20rem;" title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card  style="max-width: 20rem;" bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>

    <b-card  style="max-width: 20rem;">
      <b-card-title>Title</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card  style="max-width: 20rem;" img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

    <b-card  style="max-width: 20rem;" img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Footer Text</small>
      </template>
    </b-card>
  </b-row>
  <!-- </b-card-group> -->
</b-container>
</template>

<script>
export default {
  name: 'Notes',
  computed:{
    notes(){
      return this.$store.state.booklice.notes
    }
  },
}
</script>

<style>

</style>
