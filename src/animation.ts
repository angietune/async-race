// animateCar(
//     car: HTMLDivElement,
//     duration: number,
//     distance: number,
//   ): Promise<boolean> {
//     return new Promise(resolve => {
//       this.carIsRunning = true;
//       const start = performance.now();

//       const animate = (time: number) => {
//         if (!this.carIsRunning) return;

//         let timeFraction = (time - start) / duration;
//         if (timeFraction > 1) {
//           timeFraction = 1;
//           resolve(true);
//         }
//         const progress = timeFraction;

//         car.style.transform = `translateX(${progress * distance}px)`;

//         if (timeFraction < 1) {
//           requestAnimationFrame(animate);
//         }
//       };

//       requestAnimationFrame(animate);
//     });
//   }