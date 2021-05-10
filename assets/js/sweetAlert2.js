//
// function GetCookie(name) {
//     let arg=name+"=";
//     let alen=arg.length;
//     let clen=document.cookie.length;
//     let i=0;
//     while (i<clen) {
//         let j=i+alen;
//         if (document.cookie.substring(i,j)==arg)
//             return "here";
//         i=document.cookie.indexOf(" ",i)+1;
//         if (i==0) break;
//     }
//     return null;
// }
// function testFirstCookie(){
//     let visit=GetCookie("FirstTimeVisitCookie");
//     if (visit==null){
//         let expire=new Date();
//         expire=new Date(expire.getTime()+7776000000);
//         document.cookie="FirstTimeVisitCookie=here; expires="+expire + ";path=/";
//         user = alert("hi there first time");
//     } else {
//         user = alert("welcomeback");
//     }
// }
//
// testFirstCookie();


//
// window.addEventListener('load', () => {
//     setTimeout(() =>
//             Swal.fire({
//                 title: 'My website is still in progress',
//                 text: 'More content is coming | There might be bugs!',
//                 imageUrl: 'assets/images/Early Access/lines_color.jpg',
//             }),
//         1000);
// });


function emptybutton() {
    Swal.fire({
        title: "Woeps.. Hold Up This Doesn't Work Yet",
        text: "My Website Is still In Progress" ,
        imageUrl: 'assets/images/Early Access/lines_color.jpg',
    });
}



function LiNC() {
    Swal.fire({
        title: "Junior Full Stack Web Developer",
        text: "LiNC online design & marketing,      Internship, Tilburg" ,
        imageUrl: 'assets/images/homepage/experience/0_linc/temp.linc.jpg',
    });
}

function ICT() {
    Swal.fire({
        title: "ICT Application & Media Development",
        text: "Mbo 4 Eindhoven,      Graduation expected July 2021" ,
        imageUrl: 'assets/images/homepage/experience/1_summa_college/summa-college.jpg',
    });
}


function FullStack() {
    Swal.fire({
        title: "FullStack | Internship",
        text: "Had many new experiences. A work place where  I had to work together with co-workers to make  sure that the store would look good at all times." ,
        imageUrl: 'assets/images/homepage/experience/2_Fullstack-developer/fullstack-developer.jpg',
    });
}

function Photographer() {
    Swal.fire({
        title: "Photographer",
        text: "I just love to capture a lot of things" ,
        imageUrl: 'assets/images/homepage/experience/3_photographer/photographer.jpg',
    });
}


function MediaMarkt() {
    Swal.fire({
        title: "MediaMarkt | Part-time",
        text: "Working Experience for a variety of customers, to make sure that our ,costumers, tailored to  their wishes experience the best service by helping them get the right product and to give them the service they need on an enthusiastic  and unique way." ,
        imageUrl: 'assets/images/homepage/experience/4_Mediamarkt/salesperson.jpg',
    });
}

function Philips() {
    Swal.fire({
        title: "Philips | Internship",
        text: "Hands on the progamming language C++. I build  and installed a cluster." ,
        imageUrl: 'assets/images/homepage/experience/5_philips_MRI/philips-mri.jpg',
    });
}


function ITTech() {
    Swal.fire({
        title: "Bosch | Internship",
        text: "Making sure that eveyone at Bosch could work   Properly, replacing laptop parts and placing  accesspoints" ,
        imageUrl: 'assets/images/homepage/experience/6_bosch_IT/bosch-it.jpg',
    });
}


function ProjectCardClick() {
    console.log(click);
    Swal.fire({
        title: "I'm on it, really i am",
        text: "My Website Is still In Progress" ,
        imageUrl: 'assets/images/Early Access/lines_color.jpg',
    });
}
