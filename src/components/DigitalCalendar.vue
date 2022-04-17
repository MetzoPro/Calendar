<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
    >
      <v-list>
         <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
        <v-list-item
        link
        @click="a"
        >
          <v-list-item-icon>
            <!--<v-icon>mdi-view-list</v-icon>-->
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Les anniversaires</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
        link
        @click="a"
        >
          <v-list-item-icon>
            <!--<v-icon>mdi-star-settings</v-icon>-->
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Les événements</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>

      <v-toolbar-title style="color:white">Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
     <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
        <v-btn
        outlined
        class="mr-4"
        @click="dialog = true"
        color="primary"
        >
          New event
        </v-btn>

        <v-btn
        outlined
        class="mr-4"
        @click="meeting = true"
        color="green"
        >
          New meeting
        </v-btn>
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>

      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
              <v-form @submit.prevent="addEvent">
                <v-text-field v-model="name" type="text" label="event name (required)"></v-text-field>
                <v-text-field v-model="details" type="text" label="detail"></v-text-field>
                <v-text-field v-model="start" type="date" label="start (required)"></v-text-field>
                <v-text-field v-model="end" type="date" label="end (required)"></v-text-field>
                <v-text-field v-model="color" type="color" label="color (click to open color menu)"></v-text-field>
                <v-btn
                type="submit"
                color="primary"
                class="mr-4"
                @click.stop="dialog=false"
                >
                 Create event  
                </v-btn>
              </v-form>
          </v-container>
        </v-card>
      </v-dialog>

        <v-dialog v-model="meeting" max-width="500">
        <v-card>
          <v-container>
              <v-form @submit.prevent="addMeeting">
                <v-text-field v-model="name" type="text" label="Meeting subject"></v-text-field>
                <v-row>
                  <v-col><v-text-field v-model="start" type="date" label="start (required)"></v-text-field></v-col>
                  <v-col><v-text-field v-model="startMeet" type="time" label="hour"></v-text-field></v-col>
                </v-row>

                <v-row>
                  <v-col><v-text-field v-model="end" type="date" label="end (required)"></v-text-field></v-col>
                  <v-col><v-text-field v-model="endMeet" type="time" label="hour"></v-text-field></v-col>
                </v-row>
                 
                <v-btn
                type="submit"
                color="green"
                class="mr-4"
                @click.stop="meeting=false"
                >
                 Create meeting 
                </v-btn>
              </v-form>
          </v-container>
        </v-card>
      </v-dialog>

      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="getEvents"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn >
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer> 
            </v-toolbar>
            <v-card-text>
              <form v-if="currentlyEditing != selectedEvent.id">
                {{selectedEvent.details}}
              </form>
              <form v-else>
                <textarea
                v-model="selectedEvent.details"
                type="text"
                style="width: 100%"
                :min-height="100"
                aria-placeholder="add note"
                >
                </textarea>
              </form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Close
              </v-btn>
               <v-btn
                text
               v-if="currentlyEditing != selectedEvent.id"
               @click.prevent="editEvent(selectedEvent)"
              >
                Edit
              </v-btn>

               <v-btn
                text
               v-else
               @click.prevent="updateEvent(selectedEvent)"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      today: new Date().toISOString().substr(0, 10),
      focus: new Date().toISOString().substr(0, 10),
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      currentlyEditing: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      dialog: false,
      meeting: false,
      startMeet: '',
      endMeet: '',
      name: '',
      start: '',
      end: '',
      color: '',
      details: '',
      }),

      mounted () {
      this.$refs.calendar.checkChange();
    },

    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },

      editEvent(ev) {
        this.currentlyEditing = ev.id
      },

      updateEvent() {

      },

      addEvent() {
        if (this.name && this.start && this.end) {
          const payload = {
            name: this.name,
            start: this.start,
            end: this.end,
            details: this.details,
            color: this.color,
            meet: true
          }

          this.$store.dispatch('addEvent', payload)

        } else {
          alert('Name, start and end date are required')
        }

      },

      addMeeting() {
         const payload = {
            name: this.name,
            start: this.start + ' '+ this.startMeet,
            end: this.end + ' ' + this.endMeet,
            details: 'http://meet.google.com/new',
            color: 'orange'
          }

          this.$store.dispatch('addEvent', payload)
      },

      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
    },

      computed : {
        getEvents() {
          return this.$store.getters.getEvents;
        }

      }

  }
</script>
