import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    events: [
       {
        id: 1,
        name: "Anniversaire Shainez",
        start: "2022-12-04",
        end: "2022-12-04",
        color: "blue",
        details: "Lorem ipsum"
       },

       {
        id: 2,
        name: "Anniversaire Lisa",
        start: "2022-10-04",
        end: "2022-10-04",
        color: "blue",
        details: "Lorem ipsum"
       },

       {
        id: 3,
        name: "Anniversaire Chloé",
        start: "2022-03-03",
        end: "2022-03-03",
        color: "blue",
        details: "http://meet.google.com/new"
       },

       {
        id: 4,
        name: "Anniversaire Louis",
        start: "2022-03-04",
        end: "2022-03-04",
        color: "blue",
        details: "Lorem ipsum"
       },

       {
        id: 5,
        name: "Anniversaire Youssef",
        start: "2022-04-10",
        end: "2022-04-10",
        color: "blue",
        details: "Lorem ipsum"
       },

       {
        id:6,
		name: "Agile BizDays - Morning 1",
		start: "2021-05-18 09:45", 
		end: "2021-05-18 12:30",
        color: "blue",
        details: "Lorem ipsum" 
	},

    {
        id:7,
		name: "Agile Bizdays - Afternoon 1",
		start: "2021-05-18 13:30", 
		end: "2021-05-18 17:15",
        color: "blue",
        details: "" 
	},
    
    
    {
        id:8,
		name: "Agile BizDays - Morning 2",
		start: "2021-05-19 09:45", 
		end: "2021-05-19 12:30",
        color: "blue",
        details: "" 
	},

    {
        id:9,
		name: "Agile BizDays - Afternoon 2",
		start: "2021-05-19 13:30", 
		end: "2021-05-19 17:15",
        color: "blue",
        details: "" 
	},

    {
        id:10,
		name: "Accueil petit déjeuner PGD4",
		start: "2021-10-25 09:00", 
		end: "2021-10-25 09:30",
        color: "blue",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/hwy-jgiw-fbc" 
	},

    {
        id:11,
		name: "Piscine innovation & technologies",
		start: "2021-10-25 09:30", 
		end: "2021-10-25 17:30",
        color: "blue",
        details: "" 
	},

    {
        id:12,
		name: "Accueil + Install party + débriefing professionnel",
		start: "2021-10-25 09:30", 
		end: "2021-10-25 11:30",
        color: "blue",
        details: "" 
	},

    {
        id:13,
		name: "Kick off piscine",
		start: "2021-10-25 11:30", 
		end: "2021-10-25 12:00",
        color: "blue",
        details: "" 
	},

    {
        id:14,
		name: "Présentation du Hub Digital",
		start: "2021-10-26 09:30", 
		end: "2021-10-26 10:30",
        color: "green",
        details: "" 
	},

    {
        id:15,
		name: "Self-assesment 1",
		start: "2021-10-27 09:00", 
		end: "2021-10-27 23:42",
        color: "green",
        details: "Self-assesment 1 [1]  Links: ------ [1] https://gandalf.epitech.eu/mod/questionnaire/view.php?id=3946" 
	},

    {
        id:16,
		name: "Topic 01 is due",
		start: "2021-10-27 23:42", 
		end: "2021-10-27 23:42",
        color: "green",
        details: "_Submit here your delivery (one zip file, max 100MB)_" 
	},

    {
        id:17,
		name: "Self-assesment 1 should be completed",
		start: "2021-10-27 23:42", 
		end: "2021-10-27 23:42",
        color: "green",
        details: "_Self-assess here your proficiency for the competencies relatedto this topic._" 
	},

    {
        id:18,
		name: "Self-assesment 2 should be completed",
		start: "2021-10-27 23:42", 
		end: "2021-10-27 23:42",
        color: "green",
        details: "_Self-assess here your proficiency for the competencies relatedto this topic._" 
	},

    {
        id:19,
		name: "Férié - CAMPUS fermé",
		start: "2021-11-01 08:00", 
		end: "2021-11-27 23:00",
        color: "green",
        details: "" 
	},

    {
        id:20,
		name: "Topic 02 is due",
		start: "2021-11-01 23:42", 
		end: "2021-11-27 23:42",
        color: "green",
        details: "_Submit here your delivery (one zip file, max 100MB)_" 
	},

    {
        id:21,
		name: "Conférence sur l'addiction au jeu par Aymeric du Labo Epitech",
		start: "2021-11-05 14:00", 
		end: "2021-11-05 15:00",
        color: "green",
        details: "" 
	},

    {
        id:22,
		name: "Topic 03 is due",
		start: "2021-11-05 23:42", 
		end: "2021-11-05 23:42",
        color: "green",
        details: "_Submit here your delivery (one zip file, max 100MB)_" 
	},

    {
        id:23,
		name: "Conférence RSE par Michel Hertrich",
		start: "2021-11-08 09:30", 
		end: "2021-11-08 10:30",
        color: "green",
        details: "" 
	},

    {
        id:24,
		name: "Topic 04 is due",
		start: "2021-11-08 23:42", 
		end: "2021-11-08 23:42",
        color: "green",
        details: "_Submit here your delivery (one zip file, max 100MB)_" 
	},

    {
        id:25,
		name: "Férié Campus Fermé",
		start: "2021-11-11 08:00", 
		end: "2021-11-11 19:00",
        color: "green",
        details: "" 
	},

    {
        id:26,
		name: "Project is due",
		start: "2021-11-11 23:42", 
		end: "2021-11-11 23:42",
        color: "green",
        details: "" 
	},

    {
        id:27,
		name: "Piscine innovation & technologies",
		start: "2021-11-12 09:30", 
		end: "2021-11-12 17:30",
        color: "green",
        details: "" 
	},

    {
        id:28,
		name: "ENTREPRISE",
		start: "2021-11-15 00:00", 
		end: "2021-11-15 00:00",
        color: "green",
        details: "" 
	},

    {
        id:29,
		name: "Meeting with your Teacher, Lucas BRIGNON",
		start: "2021-11-18 10:30", 
		end: "2021-11-18 11:30",
        color: "green",
        details: "Kick-off [1] appointment  Lien du KO => https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGFhYzI3MjYtMjdmOC00ODE3LTk2ZDYtYjg5MzI1ZWFhNzI1%40thread.v2/0?context=%7b%22Tid%22%3a%22901cb4ca-b862-4029-9306-e5cd0f6d9f86%22%2c%22Oid%22%3a%221b1e9756-5adc-4a6d-ad4a-f925e19e26f0%22%2c%22IsBroadcastMeeting%22%3atrue%7d&btype=a&role=a    Links: ------ [1] https://gandalf.epitech.eu/mod/resource/view.php?id=3185" 
	},

    {
        id:30,
		name: "Peer Evaluation deadline for assessment",
		start: "2021-11-21 23:42", 
		end: "2021-11-21 23:42",
        color: "green",
        details: "Auto-evaluate your behaviour inside your project [1] group as well as your other mates's. This evaluation is important to improve your project [1] management skills with your referent.   Links: ------ [1] https://gandalf.epitech.eu/mod/assign/view.php?id=3904" 
	},

    {
        id:31,
		name: "Feedback closes",
		start: "2021-11-21 23:42", 
		end: "2021-11-21 23:42",
        color: "green",
        details: "You can share with us your thoughts and opinions regarding thisproject [1]. Course creators will consider the feedbacks to improve the quality of the course.  All submitted feedback [2] are anonymous, your responses will not affect your assessment. Give freely your opinion, but moderate yourself to stay constructive. Positive and negative feedbacks are welcome.   Links: ------ [1] https://gandalf.epitech.eu/mod/assign/view.php?id=3904 [2] https://gandalf.epitech.eu/mod/feedback/view.php?id=3911" 
	},

    {
        id:32,
		name: "Peer Evaluation should be completed",
		start: "2021-11-21 23:42", 
		end: "2021-11-21 23:42",
        color: "green",
        details: "Auto-evaluate your behaviour inside your project [1] group as well as your other mates's. This evaluation is important to improve your project [1] management skills with your referent.   Links: ------ [1] https://gandalf.epitech.eu/mod/assign/view.php?id=3904" 
	},

    {
        id:33,
		name: "Kick-off Projet JavaScript",
		start: "2021-11-25 09:30", 
		end: "2021-11-25 13:00",
        color: "green",
        details: "" 
	},

    {
        id:34,
		name: "Kick-off GOTHAM project",
		start: "2021-11-25 14:00", 
		end: "2021-11-25 14:30",
        color: "green",
        details: "" 
	},

    {
        id:35,
		name: "Projet Gotham",
		start: "2021-11-25 14:30", 
		end: "2021-11-25 17:30",
        color: "green",
        details: "" 
	},

    {
        id:35,
		name: "Stratégies de référencement - Nicolas Barbé-Calon",
		start: "2021-11-25 09:30", 
		end: "2021-11-25 13:00",
        color: "green",
        details: "" 
	},

    {
        id:36,
		name: "Soutenances finales D-POO-700",
		start: "2021-11-26 14:00", 
		end: "2021-11-26 17:30",
        color: "green",
        details: "" 
	},

    {
        id:37,
		name: "Delivery 1 is due",
		start: "2021-11-28 23:42", 
		end: "2021-11-28 23:42",
        color: "green",
        details: "" 
	},

    {
        id:38,
		name: "ENTREPRISE",
		start: "2021-11-29 00:00", 
		end: "2021-12-02 00:00",
        color: "green",
        details: "" 
	},

    {
        id:39,
		name: "Follow-up Gotham",
		start: "2021-12-02 09:30", 
		end: "2021-12-02 17:30",
        color: "green",
        details: "" 
	},

    {
        id:40,
		name: "Projet JavaScript",
		start: "2021-12-03 09:30", 
		end: "2021-12-03 17:30",
        color: "green",
        details: "" 
	},

    {
        id:41,
		name: "ENTREPRISE",
		start: "2021-12-06 00:00", 
		end: "2021-12-06 00:00",
        color: "green",
        details: "" 
	},

    {
        id:42,
		name: "Projet JavaScript : salle 604",
		start: "2021-12-09 09:30", 
		end: "2021-12-09 17:30",
        color: "green",
        details: "" 
	},

    
    {
        id:43,
		name: "Stratégies de référencement - Nicolas BarbÃ©-Calon : salle 604",
		start: "2021-12-10 09:30", 
		end: "2021-12-10 13:00",
        color: "green",
        details: "" 
	},

    {
        id:44,
		name: "Stratégies de référencement - Nicolas BarbÃ©-Calon : salle 604",
		start: "2021-12-10 09:30", 
		end: "2021-12-10 13:00",
        color: "green",
        details: "" 
	},

    {
        id:45,
		name: "Coaching avec Cécile Coursol : salle 604",
		start: "2021-12-10 14:00", 
		end: "2021-12-10 17:30",
        color: "green",
        details: "" 
	},

    {
        id:46,
		name: "ENTREPRISE",
		start: "2021-12-13 00:00", 
		end: "2021-12-16 00:00",
        color: "green",
        details: "" 
	},

    {
        id:47,
		name: "Projets Gotham / JavaScript - Nour Ezzedeen : salle 204",
		start: "2021-12-16 09:30", 
		end: "2021-12-16 13:00",
        color: "green",
        details: "" 
	},

    {
        id:48,
		name: "Coaching professionnel - Cécile Coursol : salle 204",
		start: "2021-12-16 14:00", 
		end: "2021-12-16 17:30",
        color: "green",
        details: "" 
	},

    {
        id:49,
		name: "Projets JavaScript / Gotham : salle 204",
		start: "2021-12-17 09:30", 
		end: "2021-12-17 13:00",
        color: "green",
        details: "" 
	},

    {
        id:50,
		name: "Projets JavaScript / Gotham : salle 204",
		start: "2021-12-17 14:00", 
		end: "2021-12-17 17:30",
        color: "green",
        details: "" 
	},

    {
        id:51,
		name: "Exercises 01 is due",
		start: "2021-12-17 23:42", 
		end: "2021-12-17 23:42",
        color: "green",
        details: "" 
	},

    {
        id:52,
		name: "Exercises 02 is due",
		start: "2021-12-17 23:42", 
		end: "2021-12-17 23:42",
        color: "green",
        details: "_Find here your mission and submit your delivery on github_" 
	},

    {
        id:53,
		name: "Exercises 03 is due",
		start: "2021-12-17 23:42", 
		end: "2021-12-17 23:42",
        color: "green",
        details: "_Find here your mission and submit your delivery on github_" 
	},

    {
        id:54,
		name: "ENTREPRISE",
		start: "2021-12-20 00:00", 
		end: "2022-01-08 00:00",
        color: "green",
        details: "" 
	},

    {
        id:55,
		name: "Delivery 2 is due",
		start: "2022-01-02 23:42", 
		end: "2022-01-02 23:42",
        color: "green",
        details: "" 
	},

    {
        id:56,
		name: "Piscine Change Management & team building",
		start: "2022-01-10 09:30", 
		end: "2022-01-10 17:30",
        color: "green",
        details: "" 
	},

    {
        id:57,
		name: "Temps de projets - Nour Ezzedeen",
		start: "2022-01-13 09:30", 
		end: "2022-01-13 13:00",
        color: "green",
        details: "" 
	},

    {
        id:58,
		name: "Follow-up Gotham / Temps de projets - Nour Ezzedeen",
		start: "2022-01-13 14:00", 
		end: "2022-01-13 17:30",
        color: "green",
        details: "" 
	},

    {
        id:59,
		name: "Follow-up Gotham / Temps de projets - Nour Ezzedeen",
		start: "2022-01-14 09:30", 
		end: "2022-01-14 13:00",
        color: "green",
        details: "" 
	},

    {
        id:60,
		name: "Temps de projets / Coaching avec Cécile Coursol",
		start: "2022-01-14 14:00", 
		end: "2022-01-14 17:30",
        color: "green",
        details: "" 
	},

    {
        id:61,
		name: "Temps de projets - Nour Ezzedeen",
		start: "2022-01-20 09:30", 
		end: "2022-01-20 17:30",
        color: "green",
        details: "" 
	},

    {
        id:62,
		name: "Temps de projets - Nour Ezzedeen",
		start: "2022-01-21 09:30", 
		end: "2022-01-21 13:00",
        color: "green",
        details: "" 
	},

    {
        id:63,
		name: "Coaching - Cécile Coursol",
		start: "2022-01-21 14:00", 
		end: "2022-01-21 17:30",
        color: "green",
        details: "" 
	},

    {
        id:64,
		name: "Delivery 3 is due",
		start: "2022-01-23 23:42", 
		end: "2022-01-23 23:42",
        color: "green",
        details: "" 
	},

    {
        id:65,
		name: "Follow-up Gotham / Temps de projets - Nour Ezzedeen",
		start: "2022-01-27 09:30", 
		end: "2022-01-27 17:30",
        color: "green",
        details: "" 
	},

    {
        id:66,
		name: "Follow-up Gotham / Temps de projets - Nour Ezzedeen",
		start: "2022-01-28 09:30", 
		end: "2022-01-28 13:00",
        color: "green",
        details: "" 
	},

    {
        id:67,
		name: "Meeting with your Teacher, Julien CHASSARD",
		start: "2022-01-28 10:30", 
		end: "2022-01-28 11:00",
        color: "green",
        details: "Review 3 [1]  In groups, discuss the progress of your project with your referent.   Links: ------ [1] https://gandalf.epitech.eu/mod/scheduler/view.php?id=3198" 
	},

    {
        id:68,
		name: "Follow-up Gotham",
		start: "2022-01-28 14:00", 
		end: "2022-01-28 17:30",
        color: "green",
        details: "" 
	},

    {
        id:69,
		name: "Coaching - Cécile Coursol",
		start: "2022-01-28 14:00", 
		end: "2022-01-28 17:30",
        color: "green",
        details: "" 
	},

    {
        id:70,
		name: "Project Racing JS is due",
		start: "2022-01-30 23:42", 
		end: "2022-01-30 23:42",
        color: "green",
        details: "_Find here your mission and submit your delivery on github_" 
	},

    {
        id:71,
		name: "ENTREPRISE",
		start: "2022-01-31 00:00", 
		end: "2022-02-10 00:00",
        color: "green",
        details: "" 
	},

    {
        id:72,
		name: "Final delivery is due",
		start: "2022-02-06 23:42", 
		end: "2022-02-06 00:00",
        color: "green",
        details: "" 
	},

    {
        id:73,
		name: "Feedback Racing JS closes",
		start: "2022-02-06 23:42", 
		end: "2022-02-06 23:42",
        color: "green",
        details: "You can share with us your thoughts and opinions regarding thisproject. Course creators will consider the feedbacks to improve the quality of the course.  All submitted feedback are anonymous, your responses will not affect your assessment. Give freely your opinion, but moderate yourself to stay constructive. Positive and negative feedbacks are welcome. " 
	},

    {
        id:74,
		name: "Feedback Racing JS should be completed",
		start: "2022-02-06 23:42", 
		end: "2022-02-06 00:00",
        color: "green",
        details: "You can share with us your thoughts and opinions regarding thisproject. Course creators will consider the feedbacks to improve the quality of the course.  All submitted feedback are anonymous, your responses will not affect your assessment. Give freely your opinion, but moderate yourself to stay constructive. Positive and negative feedbacks are welcome. " 
	},

    {
        id:75,
		name: "Soutenances finales Gotham",
		start: "2022-02-10 09:30", 
		end: "2022-02-10 17:30",
        color: "green",
        details: "" 
	},

    {
        id:76,
		name: "Stratégies de référencement - Nicolas BarbÃ©-Calon : salle 204",
		start: "2022-02-11 09:30", 
		end: "2022-02-11 13:00",
        color: "green",
        details: "" 
	},

    {
        id:77,
		name: "Kick-off Digitalendar : salle 204",
		start: "2022-02-11 14:00", 
		end: "2022-02-11 17:30",
        color: "green",
        details: "" 
	},

    {
        id:78,
		name: "Feedback closes",
		start: "2022-02-13 23:42", 
		end: "2022-02-13 23:42",
        color: "green",
        details: "" 
	},

    {
        id:79,
		name: "Feedback should be completed",
		start: "2022-02-13 23:42", 
		end: "2022-02-13 23:42",
        color: "green",
        details: "You can share with us your thoughts and opinions regarding thisproject. Course creators will consider the feedbacks to improve the quality of the course.  All submitted feedback [1] are anonymous, your responses will not affect your assessment. Give freely your opinion, but moderate yourself to stay constructive. Positive and negative feedbacks are welcome.   Links: ------ [1] https://gandalf.epitech.eu/mod/feedback/view.php?id=3206" 
	},

    {
        id:80,
		name: "Peer Evaluation deadline for assessment",
		start: "2022-02-13 23:42", 
		end: "2022-02-13 23:42",
        color: "green",
        details: "Auto-evaluate your behaviour inside your project group as well as your other mates's. This evaluation is important to improve your project management skills with your referent." 
	},

    {
        id:81,
		name: "ENTREPRISE",
		start: "2022-02-14 00:00", 
		end: "2022-02-17 00:00",
        color: "green",
        details: "" 
	},

    {
        id:82,
		name: "Projets : Salle 203",
		start: "2022-02-17 09:30", 
		end: "2022-02-17 13:00",
        color: "green",
        details: "" 
	},

    {
        id:83,
		name: "Kick-off DIT-810 (Dossier Médical Partagé)",
		start: "2022-02-17 11:00", 
		end: "2022-02-17 12:00",
        color: "green",
        details: "" 
	},

    {
        id:84,
		name: "Projets / Coaching avec CÃ©cile Coursol : Salle 203Kick-off DIT-810 (Dossier Médical Partagé)",
		start: "2022-02-17 11:00", 
		end: "2022-02-17 12:00",
        color: "green",
        details: "" 
	},

    {
        id:83,
		name: "Projets / Coaching avec Cécile Coursol : Salle 203",
		start: "2022-02-17 14:00", 
		end: "2022-02-17 17:30",
        color: "green",
        details: "" 
	},

    {
        id:84,
		name: "Stratégies de référencement - Nicolas BarbÃ©-Calon : Ã  distance",
		start: "2022-02-18 09:30", 
		end: "2022-02-18 13:00",
        color: "green",
        details: "" 
	},


	{
        id:85,
		name: "StratÃ©gies en Design d'Innovation - Nicolas Bry : Ã  distance",
		start: "2022-02-18 14:00", 
		end: "2022-02-18 17:30",
        color: "green",
        details: "" 
	},

	{
        id:86,
		name: "ENTREPRISE",
		start: "2022-02-21 00:00", 
		end: "2022-02-24 00:30",
        color: "green",
        details: "" 
	},

	{
        id:87,
		name: "Projets",
		start: "2022-02-21 00:00", 
		end: "2022-02-24 00:30",
        color: "green",
        details: "" 
	},

	{
        id:88,
		name: "Projets",
		start: "2022-02-21 09:30", 
		end: "2022-02-24 17:30",
        color: "green",
        details: "" 
	},
	
	{
        id:89,
		name: "Digitalendar Bootstrap 1",
		start: "2022-02-24 14:00", 
		end: "2022-02-24 17:30",
        color: "green",
        details: "" 
	},

	{
        id:90,
		name: "Straégies de référencement - Nicolas BarbÃ©-Calon : salle 203",
		start: "2022-02-25 09:30", 
		end: "2022-02-25 13:00",
        color: "green",
        details: "" 
	},

	{
        id:91,
		name: "Stratégies de référencement - Nicolas BarbÃ©-Calon : salle 203",
		start: "2022-02-25 14:00", 
		end: "2022-02-25 17:30",
        color: "green",
        details: "" 
	},

	{
        id:92,
		name: "Team Builder should be completed",
		start: "2022-02-27 23:42", 
		end: "2022-02-27 23:42",
        color: "green",
        details: "" 
	},

	{
        id:93,
		name: "Team Builder (Due date)",
		start: "2022-02-27 23:42", 
		end: "2022-02-27 23:42",
        color: "green",
        details: "" 
	},

	{
        id:94,
		name: "ENTREPRISE",
		start: "2022-02-28 00:00", 
		end: "2022-03-03 00:00",
        color: "green",
        details: "" 
	},

	{
        id:95,
		name: "Temps de projets avec Nour Ezzedeen : salle 203",
		start: "2022-03-03 09:30", 
		end: "2022-03-03 17:30",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/mad-eweu-ztz" 
	},

	{
        id:96,
		name: "Meeting with your Teacher, Lucas BRIGNON",
		start: "2022-03-04 14:00", 
		end: "2022-03-04 14:30",
        color: "green",
        details: "Follow-up 1 [1]  In groups, discuss the progress of your project [2] with your referent.    Links: ------ [1] https://gandalf.epitech.eu/mod/scheduler/view.php?id=4364 [2] https://gandalf.epitech.eu/mod/assign/view.php?id=4363 " 
	},

	{
        id:97,
		name: "Temps de projets : salle 203",
		start: "2022-03-04 14:30", 
		end: "2022-03-04 17:30",
        color: "green",
        details: "" 
	},

	{
        id:98,
		name: "ENTREPRISE",
		start: "2022-03-07 00:00", 
		end: "2022-03-10 00:30",
        color: "green",
        details: "" 
	},

	
	{
        id:99,
		name: "Projets",
		start: "2022-03-10 09:00", 
		end: "2022-03-10 17:30",
        color: "green",
        details: "" 
	},

	{
        id:100,
		name: "Présentation des langages Web - Baptiste Fehrenbach : salle 203",
		start: "2022-03-11 09:00", 
		end: "2022-03-11 17:30",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/fkz-zirv-hkk" 
	},

	{
        id:101,
		name: "Création et Gestion d'entreprise - Christian Kosiek : salle 203",
		start: "2022-03-11 14:00", 
		end: "2022-03-11 17:30",
        color: "green",
        details: "" 
	},

	{
        id:102,
		name: "ENTREPRISE",
		start: "2022-03-14 00:00", 
		end: "2022-03-17 00:00",
        color: "green",
        details: "" 
	},

	{
        id:103,
		name: "Projets",
		start: "2022-03-17 09:30", 
		end: "2022-03-17 17:30",
        color: "green",
        details: "" 
	},

	{
        id:104,
		name: "Présentation des langages Web - Baptiste Fehrenbach",
		start: "2022-03-17 09:00", 
		end: "2022-03-17 13:00",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/qif-mnyc-ncc" 
	},

	{
        id:105,
		name: "Digitalendar Bootstrap 2",
		start: "2022-03-17 14:00", 
		end: "2022-03-17 17:30",
        color: "green",
        details: "" 
	},

	{
        id:106,
		name: "Digitalendar Bootstrap 2",
		start: "2022-03-18 09:30", 
		end: "2022-03-18 13:00",
        color: "green",
        details: "" 
	},

	{
        id:107,
		name: "Meeting with your Teacher, Lucas BRIGNON",
		start: "2022-03-18 11:30", 
		end: "2022-03-18 12:00",
        color: "green",
        details: "Follow-up 1 [1]  In groups, discuss the progress of your project [2] with your referent.    Links: ------ [1] https://gandalf.epitech.eu/mod/scheduler/view.php?id=4364 [2] https://gandalf.epitech.eu/mod/assign/view.php?id=4363" 
	},

	{
        id:107,
		name: "Création et Gestion d'entreprise - Christian Kosiek",
		start: "2022-03-18 14:00", 
		end: "2022-03-18 17:30",
        color: "green",
        details: "" 
	},

	{
        id:108,
		name: "ENTREPRISE",
		start: "2022-03-21 00:00", 
		end: "2022-03-24 00:00",
        color: "green",
        details: "" 
	},

	{
        id:109,
		name: "Temps de projets / Coaching avec CÃ©cile Coursol",
		start: "2022-03-24 09:30", 
		end: "2022-03-24 17:30",
        color: "green",
        details: "" 
	},

	{
        id:110,
		name: "Digitalendar Bootstrap 3",
		start: "2022-03-24 14:00", 
		end: "2022-03-24 17:30",
        color: "green",
        details: "" 
	},

	{
        id:111,
		name: "Développement d'entreprise - Nour Ezzedeen",
		start: "2022-03-25 09:30", 
		end: "2022-03-25 13:00",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/rxr-prez-dqj" 
	},

	{
        id:112,
		name: "Création et Gestion d'entreprise - Christian Kosiek",
		start: "2022-03-25 14:00", 
		end: "2022-03-25 17:30",
        color: "green",
        details: "" 
	},

	{
        id:113,
		name: "ENTREPRISE",
		start: "2022-03-28 00:00", 
		end: "2022-03-31 00:00",
        color: "green",
        details: "" 
	},

	{
        id:114,
		name: "Projets",
		start: "2022-03-31 09:30", 
		end: "2022-03-31 17:30",
        color: "green",
        details: "" 
	},

	{
        id:115,
		name: "Stratégies en Design d'Innovation - Nicolas Bry",
		start: "2022-04-01 09:30", 
		end: "2022-04-01 13:00",
        color: "green",
        details: "" 
	},

	{
        id:116,
		name: "Création et Gestion d'entreprise - Christian Kosiek",
		start: "2022-04-01 14:00", 
		end: "2022-04-01 17:30",
        color: "green",
        details: "" 
	},

	{
        id:117,
		name: "ENTREPRISE",
		start: "2022-04-04 00:00", 
		end: "2022-04-07 00:00",
        color: "green",
        details: "" 
	},

	{
        id:118,
		name: "Projets",
		start: "2022-04-07 09:30", 
		end: "2022-04-07 17:30",
        color: "green",
        details: "" 
	},

	{
        id:119,
		name: "Développement d'entreprise - Nour Ezzedeen",
		start: "2022-04-08 09:30", 
		end: "2022-04-08 13:00",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/aah-vxxc-vtj" 
	},

	{
        id:120,
		name: "Project is due",
		start: "2022-04-10 23:42", 
		end: "2022-04-10 23:42",
        color: "green",
        details: "Find here YOUR MISSION and submit your FINAL DELIVERY ON GITHUB  \t*  \t* Refer toÂ the general documentation [1] Â to improve the qualityof your project [2]'s delivery with a README  \t* All files and documentsrelated to this project should always be present on your repository    Links: ------ [1] https://merlin.epitech.eu/course/search.php?q=starter+pack&amp\\;areaids=core_course-course [2] https://gandalf.epitech.eu/mod/assign/view.php?id=4684" 
	},

	{
        id:121,
		name: "ENTREPRISE",
		start: "2022-04-11 00:00", 
		end: "2022-04-14 00:00",
        color: "green",
        details: "" 
	},

	{
        id:122,
		name: "Content feedback opens",
		start: "2022-04-11 09:00", 
		end: "2022-04-11 09:00",
        color: "green",
        details: "* You can share with us your thoughts and opinions regarding THE CONTENT of this course \t* This feedback contains 6 MCQ and 3 open questions -> estimated time 5-10 min \t* Course creators will consider your feedbacks to improve the quality of this course \t* Give freely your opinion, but moderate yourself to stay constructive \t* All submitted feedback areÂ ANONYMOUS  " 
	},

	{
        id:123,
		name: "Projets / Keynote Digitalendar",
		start: "2022-04-14 09:30", 
		end: "2022-04-14 17:30",
        color: "green",
        details: "" 
	},

	{
        id:124,
		name: "Développement d'entreprise - Nour Ezzedeen",
		start: "2022-04-15 09:30", 
		end: "2022-04-15 13:00",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/qab-jnsu-xcr" 
	},

	{
        id:125,
		name: "JOUR FERIE",
		start: "2022-04-18 00:00", 
		end: "2022-04-18 00:00",
        color: "green",
        details: "" 
	},

	{
        id:126,
		name: "ENTREPRISE",
		start: "2022-04-19 00:00", 
		end: "2022-04-21 00:00",
        color: "green",
        details: "" 
	},

	{
        id:127,
		name: "Projets",
		start: "2022-04-21 09:30", 
		end: "2022-04-21 17:30",
        color: "green",
        details: "" 
	},

	{
        id:128,
		name: "Stratégies en Design d'Innovation - Nicolas Bry",
		start: "2022-04-22 09:30", 
		end: "2022-04-22 13:00",
        color: "green",
        details: "" 
	},

	
	{
        id:129,
		name: "Content feedback closes",
		start: "2022-04-24 23:42", 
		end: "2022-04-24 23:42",
        color: "green",
        details: "* You can share with us your thoughts and opinions regarding THE CONTENT of this course \t* This feedback contains 6 MCQ and 3 open questions -> estimated time 5-10 min \t* Course creators will consider your feedbacks to improve the quality of this course \t* Give freely your opinion, but moderate yourself to stay constructive \t* All submitted feedback areÂ ANONYMOUS  " 
	},

	{
        id:130,
		name: "ENTREPRISE",
		start: "2022-04-25 00:00", 
		end: "2022-04-28 00:00",
        color: "green",
        details: "" 
	},

	{
        id:131,
		name: "Projets",
		start: "2022-04-28 09:30", 
		end: "2022-04-28 17:30",
        color: "green",
        details: "" 
	},

	{
        id:132,
		name: "Développement d'entreprise - Nour Ezzedeen",
		start: "2022-04-28 09:30", 
		end: "2022-04-28 13:00",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/mrk-pgnn-pqb" 
	},

	{
        id:133,
		name: "Project is due",
		start: "2022-05-01 23:42", 
		end: "2022-05-01 23:42",
        color: "green",
        details: "" 
	},

	{
        id:134,
		name: "ENTREPRISE",
		start: "2022-05-02 00:00", 
		end: "2022-05-05 00:00",
        color: "green",
        details: "" 
	},

	{
        id:135,
		name: "Projets",
		start: "2022-05-05 09:30", 
		end: "2022-05-05 17:30",
        color: "green",
        details: "" 
	},

	{
        id:136,
		name: "StratÃ©gies en Design d'Innovation - Nicolas Bry",
		start: "2022-05-06 09:30", 
		end: "2022-05-06 13:00",
        color: "green",
        details: "" 
	},

	{
        id:137,
		name: "Développement d'entreprise - Nour Ezzedeen",
		start: "2022-05-06 14:00", 
		end: "2022-05-06 17:30",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/rzk-tvvs-tgz" 
	},

	{
        id:138,
		name: "ENTREPRISE",
		start: "2022-05-09 00:00", 
		end: "2022-05-12 00:00",
        color: "green",
        details: "" 
	},

	{
        id:139,
		name: "Projets / Coaching avec Cécile Coursol",
		start: "2022-05-12 09:30", 
		end: "2022-05-12 17:30",
        color: "green",
        details: "" 
	},

	{
        id:140,
		name: "Développement d'entreprise - Nour Ezzedeen",
		start: "2022-05-13 09:30", 
		end: "2022-05-13 13:00",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/rnw-eikr-sqr" 
	},

	{
        id:141,
		name: "ENTREPRISE",
		start: "2022-05-16 00:00", 
		end: "2022-05-19 00:00",
        color: "green",
        details: "" 
	},

	{
        id:142,
		name: "Projets",
		start: "2022-05-19 09:30", 
		end: "2022-05-19 17:30",
        color: "green",
        details: "" 
	},

	{
        id:143,
		name: "Développement d'entreprise - Nour Ezzedeen",
		start: "2022-05-20 09:30", 
		end: "2022-05-20 13:00",
        color: "green",
        details: "Deze afspraak bevat een videogesprek. Deelnemen: https://meet.google.com/znt-xvie-fqo" 
	},

	{
        id:144,
		name: "Product Management - Samuel Athlan",
		start: "2022-05-20 14:00", 
		end: "2022-05-20 17:30",
        color: "green",
        details: "" 
	},

	{
        id:145,
		name: "ENTREPRISE",
		start: "2022-05-20 09:30", 
		end: "2022-05-20 13:00",
        color: "green",
        details: "" 
	},

	{
        id:145,
		name: "JOUR FERIE",
		start: "2022-05-26 00:00", 
		end: "2022-05-26 00:00",
        color: "green",
        details: "" 
	},

	{
        id:146,
		name: "ENTREPRISE",
		start: "2022-05-27 00:00", 
		end: "2022-05-27 00:00",
        color: "green",
        details: "" 
	},

	{
        id:147,
		name: "ENTREPRISE",
		start: "2022-05-30 00:00", 
		end: "2022-06-02 00:00",
        color: "green",
        details: "" 
	},

	{
        id:148,
		name: "Projets",
		start: "2022-06-02 09:30", 
		end: "2022-06-02 17:30",
        color: "green",
        details: "" 
	},

	{
        id:149,
		name: "JOUR FERIE",
		start: "2022-06-06 00:00", 
		end: "2022-06-06 00:00",
        color: "green",
        details: "" 
	},

	{
        id:150,
		name: "ENTREPRISE",
		start: "2022-06-07 00:00", 
		end: "2022-06-09 00:00",
        color: "green",
        details: "" 
	},

	
	{
        id:151,
		name: "Projets / Coaching avec Cécile Coursol",
		start: "2022-06-09 09:30", 
		end: "2022-06-09 17:30",
        color: "green",
        details: "" 
	},

	{
        id:152,
		name: "Product Management - Samuel Athlan",
		start: "2022-06-10 09:30", 
		end: "2022-06-10 13:00",
        color: "green",
        details: "" 
	},

	{
        id:153,
		name: "ENTREPRISE",
		start: "2022-06-13 00:00", 
		end: "2022-06-16 00:00",
        color: "green",
        details: "" 
	},

	{
        id:154,
		name: "Projets",
		start: "2022-06-16 09:30", 
		end: "2022-06-16 17:30",
        color: "green",
        details: "" 
	},

	{
        id:155,
		name: "Product Management - Samuel Athlan",
		start: "2022-06-17 09:30", 
		end: "2022-06-17 13:00",
        color: "green",
        details: "" 
	},

	{
        id:156,
		name: "ENTREPRISE",
		start: "2022-06-20 00:00", 
		end: "2022-06-23 00:00",
        color: "green",
        details: "" 
	},

	{
        id:157,
		name: "Projets",
		start: "2022-06-23 09:30", 
		end: "2022-06-23 17:30",
        color: "green",
        details: "" 
	},

	{
        id:158,
		name: "Product Management - Samuel Athlan",
		start: "2022-06-24 09:30", 
		end: "2022-06-24 13:00",
        color: "green",
        details: "" 
	},

	{
        id:158,
		name: "ENTREPRISE",
		start: "2022-06-27 00:00", 
		end: "2022-06-30 00:00",
        color: "green",
        details: "" 
	},

	{
        id:159,
		name: "Projets",
		start: "2022-06-30 09:30", 
		end: "2022-06-30 17:30",
        color: "green",
        details: "" 
	},

	{
        id:160,
		name: "ENTREPRISE",
		start: "2022-07-01 00:00", 
		end: "2022-07-01 00:00",
        color: "green",
        details: "" 
	},

	{
        id:161,
		name: "ENTREPRISE",
		start: "2022-07-04 00:00", 
		end: "2022-07-07 00:00",
        color: "green",
        details: "" 
	},

	{
        id:162,
		name: "Projets / Coaching avec Cécile Coursol",
		start: "2022-07-07 09:30", 
		end: "2022-07-07 17:30",
        color: "green",
        details: "" 
	},

	{
        id:163,
		name: "ENTREPRISE",
		start: "2022-07-11 00:00", 
		end: "2022-07-14 00:00",
        color: "green",
        details: "" 
	},

	{
        id:164,
		name: "JOUR FERIE",
		start: "2022-07-14 00:00", 
		end: "2022-07-14 00:00",
        color: "green",
        details: "" 
	},

	{
        id:164,
		name: "ENTREPRISE",
		start: "2022-07-15 00:00", 
		end: "2022-07-15 00:00",
        color: "green",
        details: "" 
	},

	{
        id:165,
		name: "ENTREPRISE",
		start: "2022-07-18 00:00", 
		end: "2022-07-20 00:00",
        color: "green",
        details: "" 
	},

	{
        id:166,
		name: "Projets / Keynote Voltron",
		start: "2022-07-20 09:30", 
		end: "2022-07-20 17:30",
        color: "green",
        details: "" 
	},

	{
        id:167,
		name: "Projets / Keynote Voltron",
		start: "2022-07-21 09:30", 
		end: "2022-07-21 17:30",
        color: "green",
        details: "" 
	},

	{
        id:167,
		name: "Projets / Keynote Voltron",
		start: "2022-07-22 09:30", 
		end: "2022-07-22 17:30",
        color: "green",
        details: "" 
	},

	{
        id:168,
		name: "ENTREPRISE",
		start: "2022-07-25 00:00", 
		end: "2022-08-10 00:00",
        color: "green",
        details: "" 
	},
	

    ]
};

const mutations = {
    SET_DETAILS(state, id, payload) {
        state.events[id].details = payload;
    },

    ADD_EVENT(state, payload) {
        state.events.push(payload)
    }
};

const actions = {
    updateDetails(context, detail) {
        context.commit("SET_DETAILS", detail)
    },

    addEvent(context, payload) {
        console.log(payload)
        context.commit("ADD_EVENT", payload)
    }
}

const getters = {
    getEvents(state) {
    return state.events;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})