var slidesData = ['/images/banner3.svg', '/images/banner1.svg', '/images/banner2.svg','/images/banner3.svg', '/images/banner1.svg', '/images/banner2.svg'];
        
        var slidesContainer = document.getElementById('slides-container');

        slidesData.forEach(src => {
            var slideDiv = document.createElement('div');
            slideDiv.className = 'slide';
            var img = document.createElement('img');
            img.src = src;
            slideDiv.appendChild(img);
            slidesContainer.appendChild(slideDiv);
        });

        var slideIndex = 0;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var slides = document.querySelectorAll('.slide');
            var totalSlides = Math.ceil(slides.length / 3);
            if (n >= totalSlides) { slideIndex = 0; }
            if (n < 0) { slideIndex = totalSlides - 1; }
            slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

        var blogPostsData = [
            {image: '/images/banner3.svg', date: '2024-05-21', description: 'Discover the latest astrological insights for this week.'},
            {image: '/images/banner3.svg', date: '2024-05-20', description: 'Understanding the impact of planetary movements on your life.'},
            {image: '/images/banner3.svg', date: '2024-05-19', description: 'Top 5 ways to balance your chakras using astrology.'},
            {image: '/images/banner3.svg', date: '2024-05-19', description: 'Top 5 ways to balance your chakras using astrology.'},
            {image: '/images/banner3.svg', date: '2024-05-19', description: 'Top 5 ways to balance your chakras using astrology.'},
            {image: '/images/banner3.svg', date: '2024-05-19', description: 'Top 5 ways to balance your chakras using astrology.'}
        ];

        var blogPostsContainer = document.getElementById('blog-posts-container');

        blogPostsData.forEach(post => {
            var blogPostDiv = document.createElement('div');
            blogPostDiv.className = 'blog-post';
            
            var img = document.createElement('img');
            img.src = post.image;
            
            var date = document.createElement('div');
            date.className = 'date';
            date.textContent = post.date;
            
            var description = document.createElement('div');
            description.className = 'description';
            description.textContent = post.description;
            
            blogPostDiv.appendChild(img);
            blogPostDiv.appendChild(date);
            blogPostDiv.appendChild(description);
            
            blogPostsContainer.appendChild(blogPostDiv);
        });




   
        // JavaScript for testimonial carousel
        let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-slide');
        const totalSlides = slides.length;

        document.querySelector('.testimonial-next').addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        });

        document.querySelector('.testimonial-prev').addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
        });

        // Set the first slide to active
        slides[currentSlide].classList.add('active');
   

 
        document.addEventListener('DOMContentLoaded', function() {
            const questions = document.querySelectorAll('.question');
            
            questions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    this.classList.toggle('expanded');
                    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
                });
            });
        });
  