<template>
  <div class="footer">
    <div class="row">
      <div class="four columns" id="firstFooterColumn">
        <h5>Essential Mechanics of a PB&amp;J Sandwhich</h5>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/importance">Importance</a></li>
          <li><a href="/fun-facts">Fun facts</a></li>
          <li><a href="/specs">Specifications</a></li>
        </ul>
      </div>
      <div class="four columns">
        <h5>Existential questions concerning PB&amp;J:</h5>
        <transition
          name="fade">
          <p :key="qChange">{{ currentQuestion.q }}</p>
        </transition>
      </div>
      <div class="four columns">
        <h5>Technical Description</h5>
        <h6>BYU ENGL 316 (003)- Winter 2018 with Dr. Martha Wall</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            questions: [
                { q: 'What is the allowable tolerance of peanuts in chunky peanut butter?' },
                { q: 'If you pour peanuts on jellied bread, is that still a PB&J?' },
                { q: 'Is PB and J on toasted bread still a PB&J?' },
                { q: 'Is PB and J on pumpernickel or gluten-free bread considered a PB&J?' },
                { q: 'On which side should a PB&J land when dropped?' },
                { q: 'If a PB&J falls in the forest, and there\'s no one there to eat it, is it still a PB&J?' },
                { q: 'Is dipping bread in PB and J still a PB&J?' },
                { q: 'What is the allowable tolerance of peanuts in chunky PB?' },
            ],
            currentQuestion: {},
            qChange: false
        }
    },
    created: function() {
        var self = this
        const interval = 6000
        var cycle = function() {
            let rand = Math.floor(Math.random() * self.questions.length)
            self.currentQuestion = self.questions[rand]
            self.qChange = !self.qChange
            setTimeout(cycle, interval)
        }
        cycle()
    }
}
</script>

<style scoped>
.footer {
    margin-top: 60px;
}
#firstFooterColumn{
  width:21%;
}
.four.columns{
  margin-left:1%;
}
.fade-enter-active {
    transition: opacity .3s ease;
}
.fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
ul {
    list-style-type: none;
    padding-left: 0.1em;
}
</style>

