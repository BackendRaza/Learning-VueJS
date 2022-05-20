<template>
  <div class="events">
    <h1>This is global</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'HomeView',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 123,
          catagory: 'Fitness',
          title: 'Good Event',
          time: '11:00',
          date: 'May 20, 2022',
        },
        {
          id: 111,
          catagory: 'Fitness',
          title: 'Good Event',
          time: '11:00',
          date: 'May 20, 2022',
        },
      ],
    }
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
