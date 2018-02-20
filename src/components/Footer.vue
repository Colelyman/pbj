<template>
  <div class="footer">
    <transition
      name="fade">
      <p :key="qChange">{{ currentQuestion.q }}</p>
    </transition>
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
        height: 100px;
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
</style>

