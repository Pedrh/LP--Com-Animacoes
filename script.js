gsap.registerPlugin(ScrollTrigger) //dessa forma você registra que tem esse plugin do gsap.

gsap.from(".animate_inicial_texto", {
    duration: 0.6,
    opacity: 0, //indica a opacidade inicial  que vai dela até um 
    y: -150, //serve para dizer que no eixo y (vertical), o texto vai VIR do pixel -150 e descer até a posição que a gente colocou nele no css (é como se a parte debaixo do y fosse positiva e de cima negativo)  
    stagger: 0.4, //Serve para avisar que eles vão demorar 0,4 segundos para aparecer (primeiro aparecer, depois de 0,4s o outro aparece)
});

gsap.from(".animate_inicial_img", {
    duration: 0.9,
    opacity: 0,
    x: 250,
});

gsap.from(".animate_artigos", {
    duration: 0.8,
    opacity: 0,
    x: -100,
    stagger: 0.2,
    delay: 1, //esse é o tempo de demora. Quando abre o site, demora 1s até a animação deles começar
});

gsap.from(".animate_final", {
    scrollTrigger: ".animate_final", //aqui a gente coloca o que vai ser o gatilho para que essa animação comece
    duration: 0.8,
    opacity: 0,
    y: -150,
    delay: 0.4,
    stagger: 0.3
});