<template>
  <div class="footer">
    <transition
      name="question-transition"
      mode="out-in">
      <p>{{ currentQuestion.q }}</p>
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
                { q: 'If a PB&J falls in the forest, and there\' no one there to eat it, is it still a PB&J?' },
                { q: 'Is dipping bread in PB and J still a PB&J?' },
                { q: 'What is the allowable tolerance of peanuts in chunky PB?' },
            ],
            currentQuestion: {}
        }
    },
    created: function() {
        var self = this
        const interval = 6000
        var cycle = function() {
            let rand = Math.floor(Math.random() * self.questions.length)
            self.currentQuestion = self.questions[rand]
            setTimeout(cycle, interval)
        }
        cycle()
    }
}
</script>

<style scoped>

</style>

