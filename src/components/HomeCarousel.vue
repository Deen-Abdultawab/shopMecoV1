<template>
  <div id="carousel">
    <h1 class="firsty">Hear out what people say about us</h1>
    <div class="slide-container" ref="slideContainer">
      <article class="slide active">
        <div class="flex">
          <div class="slide-img">
            <img src="../assets/images/Rectangle27(2).png" alt="" class="overlay">
            <img src="@/assets/images/Rectangle25(2).png" alt="" class="img">
          </div>
          <div class="slide-article">
            <p>
              Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.
            </p>
          </div>
        </div>
      </article>
      <article class="slide">
        <div class="flex">
          <div class="slide-img">
            <img src="../assets/images/Rectangle27(2).png" alt="" class="overlay">
            <img src="@/assets/images/Rectangle25(2).png" alt="" class="img">
          </div>
          <div class="slide-article">
            <p>
              Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.
            </p>
          </div>
        </div>
      </article>
      <article class="slide">
        <div class="flex">
          <div class="slide-img">
            <img src="../assets/images/Rectangle27(2).png" alt="" class="overlay">
            <img src="@/assets/images/Rectangle25(2).png" alt="" class="img">
          </div>
          <div class="slide-article">
            <p>
              Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.
            </p>
          </div>
        </div>
      </article>
    </div>
    <div class="controls">
      <div class="tags" ref="tags">
        <span class="tag-span active"></span>
        <span class="tag-span"></span>
        <span class="tag-span"></span>
      </div>
      <div class="arrows">
        <button class="btn-left nav-btn" @click="handlePrev" :class="{ unclick: leastScroll}">
          <span class="material-icons">
            chevron_left
          </span>
        </button>
        <button class="btn-right nav-btn" @click="handleNext" :class="{ unclick: maxScroll}">
          <span class="material-icons">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
 
<script>
import { onMounted, ref } from 'vue';
  export default {
    name: 'MyComponent',
    setup(){
      let testimony = ref([
        {
          id: 1,
          src: 'Rectangle25(2).png',
          message: 'Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.',
          active: true
        },
        {
          id: 2,
          src: 'Rectangle25(2).png',
          message: 'Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.',
          active: false
        },
        {
          id: 3,
          src: 'Rectangle25(2).png',
          message: 'Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.',
          active: false
        }
      ])

      const slideContainer = ref(null)
      const imageList = ref([])
      const tags = ref(null)
      const tagList = ref([])
      const maxScroll = ref(false)
      const leastScroll = ref(true)

      onMounted(()=>{
        imageList.value = [...slideContainer.value.children]
        tagList.value = [...tags.value.children]
      
      })

      function handleNext(){
        let activeSlide = imageList.value.find(slide => slide.classList.contains('active'))
        let activeTag = tagList.value.find(tag => tag.classList.contains('active'))

        let next = activeSlide.nextElementSibling
        let nextTag = activeTag.nextElementSibling
        
        activeSlide.classList.remove('active')
        activeTag.classList.remove('active')
        next.classList.add('active')
        nextTag.classList.add('active')
        slideContainer.value.scrollLeft += next.scrollWidth

        if(next === imageList.value[imageList.value.length - 1]){
          maxScroll.value = true
        }

        leastScroll.value = false

      }

      function handlePrev(){
        let activeSlide = imageList.value.find(slide => slide.classList.contains('active'))
        let activeTag = tagList.value.find(tag => tag.classList.contains('active'))

        let prev = activeSlide.previousElementSibling
        let prevTag = activeTag.previousElementSibling
        
        activeSlide.classList.remove('active')
        activeTag.classList.remove('active')
        prev.classList.add('active')
        prevTag.classList.add('active')
        slideContainer.value.scrollLeft -= prev.scrollWidth

        if(prev === imageList.value[0]){
          leastScroll.value = true
        }

        maxScroll.value = false

      }



      return { testimony, handleNext, slideContainer, tags, maxScroll, leastScroll, handlePrev }
    }
    
  }
  
</script> 

<style scoped>

#carousel {
  margin: 2rem auto;
  position: relative;
}

img {
  display: block;
  object-fit: cover;
  width: 100%;
}

article{ 
  display: flex;
  align-items: center;
  justify-content: center;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 0;
  width: 60vw;
  margin: 0 auto;
  text-align: right;
  position: absolute;
  top: 80%;
  right: 5%;
}

.unclick {
  pointer-events: none;
  opacity: 0.4;
}

.arrows .nav-btn {
  border: 1px solid var(--primary-color);
  padding: 0.3rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.3s linear;
}

.arrows .nav-btn:hover {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  transform: scale(1.01);
}

.tags, .arrows {
  display: flex;
  gap: 0.5rem;
}

.arrows {
  gap: 1rem;
}

.tags {
  flex: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag-span {
  background:#ffb74c;
  width: 15px;
  height: 2.5px;
  border: none;
  transition: all 0.3s linear;
}

.tag-span.active {
  width: 30px;
}

.slide-container {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  scroll-behavior: smooth;
  transition: all 0.3s linear;
}

.slide-container::-webkit-scrollbar {
    display: none;
  }

.slide {
   flex: 1 0 100%;
}

.flex {
  display: grid;
  grid-template-columns: 300px 1fr;
  place-items: center;
  gap: 2.5rem;
}

.slide-img {
  display: grid;
  max-width: 100%;
  position: relative;
  justify-self: left;
}

p {
  font-family: 'Sofia Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #7C7C7C;
}

.img {
  margin-top: 1.5rem;
}

.overlay{
  position: absolute;
  z-index: 99;
  left: 1.5rem;
}
.firsty{
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: #350B89;
  width: 90vw;
  max-width: 930px;
  margin: 0 auto;
  margin-bottom: 2rem;
  
}

@media only screen and (max-width: 960px){
  .slide-container {
    gap: 2rem;
  }
}

@media only screen and (max-width: 900px) {
  article {
    padding: 0;
  }

  p {
    font-size: 22px;
  }

  .flex {
    grid-template-columns: 1fr;
  }

  .slide-img {
    justify-self: center;
  }

  .controls {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95vw;
  }

  .tags {
    display: none;
  }

  .arrows {
    flex: 1;
    justify-content: space-between;
  }
}

@media only screen and (max-width: 700px) {

  .firsty{
    text-align: center;
    font-size: 2.5rem;
    padding-bottom: 20px;
    line-height: 38px;
  }

  .flex{
    grid-template-columns: 1fr;
  }

  p{
    height: auto;
    font-size: 20px;
    padding-top: 10px;
  }

}

@media only screen and (max-width: 600px){
  .controls {
    top: 65%;
   
  }
}
</style>

    

