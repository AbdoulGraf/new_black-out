$(document).ready(function () {

    console.log("werarathere")
    var video = $('#preloaderVideo').get(0); // Access the video element

    // Correctly attach the click event using on for better practice


    function handlePreloader() {
        video.loop = false; // Ensure the video doesn't loop

        document.body.addEventListener('click', function () {

            console.log("Body clicked");

            if (video.muted) {
                video.muted = false; // Unmute the video

                // Optionally, hide the unmute button after clicking
                // Ensure you have a way to access and hide the button, e.g., by its id or class
                document.getElementById('unmuteButtonId').style.display = 'none'; // Replace 'unmuteButtonId' with your actual button's id
            }
        });


        // const video = document.getElementById('preloaderVideo');
        const dubaiLink = document.querySelector('.link-boxx a:first-child');
        const abudhabiLink = document.querySelector('.link-boxx a:nth-child(2)');
        const message = document.querySelectorAll('.description__message');



        // Initially hide the buttons until the video is about to end
        dubaiLink.style.opacity = '0';
        abudhabiLink.style.opacity = '0';


        video.addEventListener('timeupdate', function () {

            if (video.duration - video.currentTime < 4) {
                // video.pause(); // Pause the video 1 second before it ends
                // Make links visible and start the animations
                document.querySelectorAll('.link-boxx a').forEach(link => {
                    // link.style.opacity = '1'; // Make the link visible just before the animation starts

                    link.style.display = 'block';

                });


                message.forEach(messages => {
                    messages.classList.add('show-message');

                })



                // message__logo.classList.add('show-logo');

                // Trigger animations by adding classes that apply the animation CSS
                dubaiLink.style.opacity = '1';
                abudhabiLink.style.opacity = '1';
                dubaiLink.style.animation = 'moveFromLeftToCenter 3s forwards';
                abudhabiLink.style.animation = 'moveFromRightToCenter 3s forwards';

                // const dubaiLink = document.querySelector('.link-boxx a:first-child');
                // const abudhabiLink = document.querySelector('.link-boxx a:nth-child(2)');
                // dubaiLink.classList.add('slide-in-left');
                // abudhabiLink.classList.add('slide-in-right');


                //document.querySelector('.preloader').style.backgroundImage = 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fuk%2Fwatches%2Fgalaxy-watch%2Fgalaxy-watch6-44mm-graphite-bt-sm-r940nzkaeua%2Fbuy%2F&psig=AOvVaw2gdDD-mLCylvE4eBOGPGv6&ust=1707900485151000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiyrJ_3p4QDFQAAAAAdAAAAABAE")'; // Set background image
                //  showButtonsWithAnimation(); // Call to animate buttons
                // animateLinks();


            }
        });


        function animateLinks() {
            const links = document.querySelectorAll('.link-boxx a');

            links.forEach((link) => {

                const direction = Array.from(links).indexOf(link) % 2 === 0 ? '-50%' : '50%';
                link.style.transform = `translateX(${direction})`;
                // Add the fade-out class
                setTimeout(() => { // Delay to ensure any previous styles are applied
                    link.classList.add('fade-out-to-center');
                }, 20);


            })

        }






        function showButtonsWithAnimation() {

            // // Select the first and second link
            // const firstLink = document.querySelector('.link-box a:first-child');
            // const secondLink = document.querySelector('.link-box a:nth-child(2)');

            // // Apply classes for animation
            // if (firstLink) firstLink.classList.add('slide-in-left');
            // if (secondLink) secondLink.classList.add('slide-in-right');

            // Example of simply making the buttons visible by changing their opacity
            const links = document.querySelectorAll('.link-boxx a');
            links.forEach(link => {
                link.style.opacity = 1; // Directly set opacity to 1
                // If using classes for animation, add them here
                link.classList.add('animate');
            });
        }






        // Check if the preloader exists and then fade it out after video ends or after a timeout
        // if ($('.preloader').length) {

        //     $('body').addClass('page-loaded');

        //     $('#preloaderVideo').on('ended', function () {
        //         console.log("itEndOkk")
        //         $('.preloader').fadeOut('slow'); // Fade out the preloader
        //     });

        //     // Optional: Fade out the preloader after a certain time (e.g., 8 seconds)
        //     setTimeout(function () {
        //         $('.preloader').fadeOut('slow');
        //     }, 8000);
        // }
    }






    // Call the preloader handler function
    handlePreloader();
});