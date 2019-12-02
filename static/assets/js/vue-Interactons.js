//VUE.jS CODES
new Vue({
  // el: "#alejo",
  components: {
    Multiselect: window.VueMultiselect.default
  },
  // components: {
  //     Multiselect
  //   },
  data: {
    notEditable: true,
    editable: false,
    isEdited: false,
    adminEditable: true,
    showAdmin: true,
    isAdminEdited: false
  },
  computed: {},

  methods: {
    toggleEdit() {
      this.notEditable = false;
      this.isEdited = true;
    },

    cancelEdit() {
      this.notEditable = false;
      this.isEdited = false;
    },
    editUserAdmin() {
      console.log('event occured');
      this.adminEditable = false;
      this.showAdmin = false;
      this.isAdminEdited = true;
    }
  }
});
