// $(document).ready(
//     function(){
//       $(".search-button").click(toggle);
//     }
//   );
  
//   function toggle() {
//     $("#index-form").toggle();
//   }
  
//   toggle();

      let count = 0;
      let btn = document.querySelector('#click-me');
      let divSection = document.getElementById('showCount');
      btn.addEventListener('click', (e)=>{
        count++;
        divSection.innerHTML=`Number of Clicks are: ${count}`;
     });