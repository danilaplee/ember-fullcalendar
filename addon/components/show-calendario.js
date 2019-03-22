/* global $ */
import Ember from 'ember';
import layout from '../templates/components/show-calendario';

export default Ember.Component.extend({
  layout: layout,

  // Defines the buttons and title at the top of the calendar
  header: null, 

  // The initial date displayed when the calendar first loads
  // Default is current date
  defaultDate: null,
  
  // Enables/disables use of jQuery UI theming
  theme: null,

  // This setting only takes affect when <theme> is false
  buttonIcons: null, 

  // Determines which icons are displayed in buttons of the header
  // only when <theme> is true
  themeButtonIcons: null, 

  // The day that each week begins
  // Default value is 0 (Sunday)
  firstDay: null, 

  // Displays the calendar in right-to-left mode
  // Default to false
  isRTL: null,

  // Whether to include Saturday/Sunday columns in any of the calendar views
  // Default to true
  weekends: null,

  // Exclude certain days of the week from being displayed
  // 0-6 where 0=Sunday
  // By default, no days are hidden, unless weekends is set to false
  hiddenDays: null,

  // Determines the number of weeks displayed in a month view
  // If true, the calendar will always be 6 weeks tall.
  // If false, the calendar will have either 4,5, or 6 weeks, depending on the month
  // Default to true
  fixedWeekCount: null,

  // Determines if week numbers should be displayed on the calendar
  // Default to false
  weekNumbers: null,

  // The method for calculating week numbers that are displayed with the weekNumber setting.
  // Default is "local" which causes the locale-specific calculation to be used, as determined by the calendar's lang(language) setting
  weekNumberCalculation: null,

  // Emphasizes certain time slots on the calsendar. 
  // By default, Monday-Friday, 9am-5pm
  businessHours: null,

  // Will make the entire calendar (including header) a pixel height
  // By default, this option is unset and the calendar's height is calculated by aspectRatio 
  height: null,

  // Will make the calendar's content area pixel height
  // By default, this option is unset and the calendar's height is calculated by aspectRatio
  contentHeight: null,

  // Determines the width-to-height aspect ratio of the calendar
  // Default 1.35
  aspectRatio: 1.35,

  // Whether to automatically resize the calendar when the browser window resizes
  // Default is true
  handleWindowResize: null,

  // Limits the number of events displayed on a day
  // Default is false
  eventLimit: null,

  // Determines the action taken when the user clicks on a "more" link created by the eventLimit option
  // "popover", "week", "day", view name, function
  eventLimitClick: null,
  monthNames:null,
  dayNamesShort:null,
  events:null,
  dateClick:null,
  eventClick:null,

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, this.initCalendar);
  },

  initCalendar: function() {

    let properties = {
      monthNames:this.monthNames,
      dayNamesShort:this.dayNamesShort,
      header: this.header,
      defaultDate: this.defaultDate,
      theme: this.theme,
      buttonIcons: this.buttonIcons,
      themeButtonIcons: this.themeButtonIcons,
      firstDay: this.firstDay,
      isRTL: this.isRTL,
      weekends: this.weekends,
      hiddenDays: this.hiddenDays,
      fixedWeekCount: this.fixedWeekCount,
      weekNumbers: this.weekNumbers,
      weekNumberCalculation: this.weekNumberCalculation,
      businessHours: this.businessHours,
      height: this.height,
      contentHeight: this.contentHeight,
      aspectRatio: this.aspectRatio,
      handleWindowResize: this.handleWindowResize,
      eventLimit: this.eventLimit,
      eventClick: this.eventClick,
      dateClick: this.dateClick,
      events:this.events || [],
      eventLimitClick: this.eventLimitClick
    };
    // for (let i = 0; i<properties.length; i++) {
    //   if ( properties[i] != null ) {
    //     options.push(properties[i]);
    //   }
    // }
    console.info('=== setting up fullcalenadr ====', properties)
	let calendar = $("#calendar").fullCalendar( properties );
  return calendar;

}
});
