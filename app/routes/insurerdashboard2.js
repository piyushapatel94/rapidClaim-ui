import Ember from 'ember';
import CONFIG from 'cm-insurance/config/environment';
export default Ember.Route.extend({
isShowingModalphoto:false,
    actions: {

        
  /*  uploadImage: function (file) {
          var mycontroller = this;
        console.log("entering upload Image");

         var insurertoken = this.controllerFor('application').get('insurertoken');
        
        console.log("token :" + insurertoken);
     
   
      file.upload(CONFIG.GOURL + '/UploadDocs?token='+insurertoken).then(function (response) {
        
        console.log("saviing file...");
        mycontroller.toggleProperty('isShowingModalphoto');
        
      }, function () {
        
      });
    },
    uploadFIR:function (file) {
        var mycontroller = this;
        console.log("entering upload FIR 2");

         var insurertoken = this.controllerFor('application').get('insurertoken');

        console.log("token :" + insurertoken);
     
   
      file.upload(CONFIG.GOURL + '/UploadDocs?token='+insurertoken).then(function (response) {
        console.log(JSON.stringify(response));
          mycontroller.toggleProperty('isShowingModalphoto');
        console.log("saviing file...");
        //return image.save();
      }, function () {
        //image.rollback();
      });
    },*/
    uploadDoc:function (file) {
        // var mycontroller = this;
        console.log("entering upload FIR 3");

         var insurertoken = this.controllerFor('application').get('insurertoken');
        //console.log('message :' + sessionStorage.getItem('insurertoken'));
        //this.controllerFor('insurerdashboard2').set('insurertoken', insurertoken);

        console.log("token :" + insurertoken);
     
   
      file.upload(CONFIG.GOURL + '/UploadDocs?token='+insurertoken).then(function (response) {
        console.log(JSON.stringify(response));
        alert("Document uploaded sucessfully!!!!");
         // this.toggleProperty('isShowingModalphoto');
         // this.set("isShowingModalphoto",true);
        console.log("saviing file...");
        //return image.save();
        
      }, function () {
        //image.rollback();
         this.toggleProperty('isShowingModalphoto');
      });
      this.toggleProperty('isShowingModalphoto');
    },
  },

    model() {

      // alert("Before notifying the Claim Submit your Documents");

        this.controllerFor('insurerdashboard2').set('isShowingModals', false);
        this.controllerFor('insurerdashboard2').set('isShowingModal', false);
        this.controllerFor('insurerdashboard2').set('claimno', null);

        var claimno = this.controllerFor('insurerdashboard').get('claimno');
        console.log("claimno :" + claimno);
        this.controllerFor('insurerdashboard2').set('claimno', claimno);

        var title = this.controllerFor('insurerdashboard').get('title');
        console.log("title :" + title);
        this.controllerFor('insurerdashboard2').set('title', title);

        var showformdetails = this.controllerFor('insurerdashboard').get('showformdetails');
        console.log("showformdetails :" + showformdetails);
        this.controllerFor('insurerdashboard2').set('showformdetails', showformdetails);

        var showotherformdetails = this.controllerFor('insurerdashboard').get('showotherformdetails');
        console.log("showotherformdetails :" + showotherformdetails);
        this.controllerFor('insurerdashboard2').set('showotherformdetails', showotherformdetails);

        var damagecontent = this.controllerFor('insurerdashboard').get('damagedetails');
        console.log("damagecontent :" + damagecontent);
        this.controllerFor('insurerdashboard2').set('damagecontent', damagecontent);

        var approvedclaim = this.controllerFor('insurerdashboard').get('approvedclaim');
        console.log("approvedclaim :" + approvedclaim);
        this.controllerFor('insurerdashboard2').set('approvedclaim', approvedclaim);


        var totaldamagevalue = this.controllerFor('insurerdashboard').get('totaldamagevalue');
        console.log("totaldamagevalue :" + totaldamagevalue);
        this.controllerFor('insurerdashboard2').set('totaldamagevalue', totaldamagevalue);

        var totalclaimvalue = this.controllerFor('insurerdashboard').get('totalclaimvalue');
        console.log("totalclaimvalue :" + totalclaimvalue);
        this.controllerFor('insurerdashboard2').set('totalclaimvalue', totalclaimvalue);

        var assesseddamagevalue = this.controllerFor('insurerdashboard').get('assesseddamagevalue');
        console.log("assesseddamagevalue :" + assesseddamagevalue);
        this.controllerFor('insurerdashboard2').set('assesseddamagevalue', assesseddamagevalue);

        var assessedclaimvalue = this.controllerFor('insurerdashboard').get('assessedclaimvalue');
        console.log("assessedclaimvalue :" + assessedclaimvalue);
        this.controllerFor('insurerdashboard2').set('assessedclaimvalue', assessedclaimvalue);

        var remark = this.controllerFor('insurerdashboard').get('remark');
        console.log("remark :" + remark);
        this.controllerFor('insurerdashboard2').set('remark', remark);

        var claimadjsterarray = this.controllerFor('insurerdashboard').get('claimadjsterarray');
        console.log("claimadjsterarray :" + JSON.stringify(claimadjsterarray));
        this.controllerFor('insurerdashboard2').set('claimadjsterarray', claimadjsterarray);

        var pubadjusterarray = this.controllerFor('insurerdashboard').get('pubadjusterarray');
        console.log("pubadjusterarray :" + JSON.stringify(pubadjusterarray));
        this.controllerFor('insurerdashboard2').set('pubadjusterarray', pubadjusterarray);


        var notifieddate = this.controllerFor('insurerdashboard').get('notifieddate');
        console.log("notifieddate :" + notifieddate);
        if (notifieddate === "0001-01-01") {
            this.controllerFor('insurerdashboard2').set('notifieddate', null);
        } else {
            this.controllerFor('insurerdashboard2').set('notifieddate', notifieddate);
        }

        var submitdate = this.controllerFor('insurerdashboard').get('submitdate');
        console.log("submitdate :" + submitdate);
        if (submitdate === "0001-01-01") {
            this.controllerFor('insurerdashboard2').set('submitdate', null);
        } else {
            this.controllerFor('insurerdashboard2').set('submitdate', submitdate);
        }

        var examinedate = this.controllerFor('insurerdashboard').get('examinedate');
        console.log("examinedate :" + examinedate);
        if (examinedate === "0001-01-01") {
            this.controllerFor('insurerdashboard2').set('examinedate', null);
        } else {
            this.controllerFor('insurerdashboard2').set('examinedate', examinedate);
        }

        var validatedate = this.controllerFor('insurerdashboard').get('validatedate');
        console.log("validatedate :" + validatedate);
        if (validatedate === "0001-01-01") {
            this.controllerFor('insurerdashboard2').set('validatedate', null);
        } else {
            this.controllerFor('insurerdashboard2').set('validatedate', validatedate);
        }

        var approvrdate = this.controllerFor('insurerdashboard').get('approvrdate');
        console.log("approvrdate :" + approvrdate);
        if (approvrdate === "0001-01-01") {
            this.controllerFor('insurerdashboard2').set('approvrdate', null);
        } else {
            this.controllerFor('insurerdashboard2').set('approvrdate', approvrdate);
        }

        var settledate = this.controllerFor('insurerdashboard').get('settledate');
        console.log("settledate :" + settledate);
        if (settledate === "0001-01-01") {
            this.controllerFor('insurerdashboard2').set('settledate', null);
        } else {
            this.controllerFor('insurerdashboard2').set('settledate', settledate);
        }

        /*  var approvedstatuscount =this.controllerFor('insurerdashboard').get('approvedstatuscount');
      this.controllerFor('insurerdashboard2').set('approvedstatuscount',approvedstatuscount);

      var examinedstatuscount =this.controllerFor('insurerdashboard').get('examinedstatuscount');
      this.controllerFor('insurerdashboard2').set('examinedstatuscount',examinedstatuscount);

      var Notifiedstatuscount =this.controllerFor('insurerdashboard').get('Notifiedstatuscount');
      this.controllerFor('insurerdashboard2').set('Notifiedstatuscount',Notifiedstatuscount);

      var Submittedstatuscount =this.controllerFor('insurerdashboard').get('Submittedstatuscount');
      this.controllerFor('insurerdashboard2').set('Submittedstatuscount',Submittedstatuscount);

      var Validatedstatuscount =this.controllerFor('insurerdashboard').get('Validatedstatuscount');
      this.controllerFor('insurerdashboard2').set('Validatedstatuscount',Validatedstatuscount);

      var Settledstatuscount =this.controllerFor('insurerdashboard').get('Settledstatuscount');
      this.controllerFor('insurerdashboard2').set('Settledstatuscount',Settledstatuscount);

       var Rejectedstatuscount =this.controllerFor('insurerdashboard').get('Rejectedstatuscount');
      this.controllerFor('insurerdashboard2').set('Rejectedstatuscount',Rejectedstatuscount);
*/
        //footer part
        var Average = localStorage.Average;
        console.log("avg :" + Average);
        this.controllerFor('insurerdashboard2').set('Average', Average);
        var Longest = localStorage.Longest;
        this.controllerFor('insurerdashboard2').set('Longest', Longest);
        var Shortest = localStorage.Shortest;
        this.controllerFor('insurerdashboard2').set('Shortest', Shortest);


        var insurertoken = this.controllerFor('application').get('insurertoken');
        console.log('message :' + sessionStorage.getItem('insurertoken'));
        this.controllerFor('insurerdashboard2').set('insurertoken', insurertoken);
        var mycontroller = this;
        $.ajax({
            url: CONFIG.GOURL + '/publicadjusterlist',
            type: 'GET',
            accepts: 'application/json',
            headers: {
                'x-access-token': insurertoken,
            },
            success: function(data) {
                console.log(JSON.stringify(data));
                var pubadjlist = data.message;
                mycontroller.controllerFor('insurerdashboard2').set("pubadjlist", pubadjlist);
                console.log(pubadjlist[0]._id);
                var fname = [];
                var lname = [];
                var fullname =[];
                for (var i = 0; i < pubadjlist.length; i++) {

                    fname.push(pubadjlist[i].firstname);
                    lname.push(pubadjlist[i].lastname);
                     //fullname.push((pubadjlist[i].firstname).concat(pubadjlist[i].lastname));
                     fullname.push(pubadjlist[i].firstname+' '+pubadjlist[i].lastname);

                }
                console.log(JSON.stringify(fname));
                  console.log(JSON.stringify(fullname));
                  mycontroller.controllerFor('insurerdashboard2').set("fullname", fullname);
                mycontroller.controllerFor('insurerdashboard2').set("fname", fname);
                mycontroller.controllerFor('insurerdashboard2').set("lname", lname);




                return data;

            },
            error: function(err) {
                console.log(data);
                console.log(err);
                console.log('DEBUG: GET Enquiries Failed');
            }
        });


    }

     
});