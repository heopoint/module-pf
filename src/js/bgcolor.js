import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export function bgColor() {
    // 백그라운드 색상 바꾸기 타임라인을 이용하여 스크롤에 따라 배경색을 변경
    gsap.registerPlugin(ScrollTrigger);
 
    // 각 parallax__item에 대해 ScrollTrigger 생성
   document.querySelectorAll('section').forEach((item) => {
      let color = item.getAttribute("data-bg");
    
      ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 5%",
        markers: true, // 스크롤 트리거 마커 표시
    
        onEnter: () => gsap.to("body", {
          backgroundColor: color,
          duration: 1.4
        }),
        onEnterBack: () => gsap.to("body", {
          backgroundColor: color,
          duration: 1.4
        })
      });
    });
}