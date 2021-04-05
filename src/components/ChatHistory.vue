<template>
  <div class="chat-history">
    <ChatHistoryHeader/>
    <ul ref="chatHistory">
      <li
          v-for="message in messages"
          :key="message.id"
          class="message"
          :class="{'me': message.user.name === 'Я'}"
      >
        <img class="message-avatar" :src="message.user.avatarUrl" alt="">
        <div class="message-body-container">
          <p class="message-body">{{ message.body }}</p>
        </div>
        <span class="message-date">{{ message.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import ChatHistoryHeader from "./ChatHistoryHeader";
export default {
  components: {ChatHistoryHeader},
  data() {
    return {
      messages: [
        {id: 0,
          user: {
            name: "Александр Нестеренко",
            avatarUrl: "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
          },
          body: "Привет)))",
          date: "Только что"
        },
        {id: 1,
          user: {
            name: "Я",
            avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj"
          },
          body: "Здарова",
          date: "Только что"
        },
        {id: 2,
          user: {
            name: "Александр Нестеренко",
            avatarUrl: "https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
          },
          body: "Как жизнь молодая?",
          date: "Только что"
        },
        {id: 3,
          user: {
            name: "Я",
            avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj"
          },
          body: "Я в своем познании настолько преисполнился, что я как будто бы уже\n" +
              "\n" +
              "сто триллионов миллиардов лет проживаю на триллионах и\n" +
              "\n" +
              "триллионах таких же планет, как эта Земля, мне этот мир абсолютно\n" +
              "\n" +
              "понятен, и я здесь ищу только одного - покоя, умиротворения и\n" +
              "\n" +
              "вот этой гармонии, от слияния с бесконечно вечным, от созерцания\n" +
              "\n" +
              "великого фрактального подобия и от вот этого замечательного всеединства\n" +
              "\n" +
              "существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно\n" +
              "\n" +
              "малое, хоть ввысь - бесконечное большое, понимаешь? А ты мне опять со\n" +
              "\n" +
              "своим вот этим, иди суетись дальше, это твоё распределение, это\n" +
              "\n" +
              "твой путь и твой горизонт познания и ощущения твоей природы, он\n" +
              "\n" +
              "несоизмеримо мелок по сравнению с моим, понимаешь? Я как будто бы уже\n" +
              "\n" +
              "давно глубокий старец, бессмертный, ну или там уже почти бессмертный,\n" +
              "\n" +
              "который на этой планете от её самого зарождения, ещё когда только Солнце\n" +
              "\n" +
              "только-только сформировалось как звезда, и вот это газопылевое облако,\n" +
              "\n" +
              "вот, после взрыва, Солнца, когда оно вспыхнуло, как звезда, начало\n" +
              "\n" +
              "формировать вот эти коацерваты, планеты, понимаешь, я на этой Земле уже\n" +
              "\n" +
              "как будто почти пять миллиардов лет живу и знаю её вдоль и поперёк\n" +
              "\n" +
              "этот весь мир, а ты мне какие-то... мне не важно на твои тачки, на твои\n" +
              "\n" +
              "яхты, на твои квартиры, там, на твоё благо. Я был на этой\n" +
              "\n" +
              "планете бесконечным множеством, и круче Цезаря, и круче Гитлера, и круче\n" +
              "\n" +
              "всех великих, понимаешь, был, а где-то был конченым говном, ещё хуже,\n" +
              "\n" +
              "чем здесь. Я множество этих состояний чувствую. Где-то я был больше\n" +
              "\n" +
              "подобен растению, где-то я больше был подобен птице, там, червю, где-то\n" +
              "\n" +
              "был просто сгусток камня, это всё есть душа, понимаешь? Она имеет грани\n" +
              "\n" +
              "подобия совершенно многообразные, бесконечное множество. Но тебе этого\n" +
              "\n" +
              "не понять, поэтому ты езжай себе , мы в этом мире как бы живем\n" +
              "\n" +
              "разными ощущениями и разными стремлениями, соответственно, разное наше и\n" +
              "\n" +
              "место, разное и наше распределение. Тебе я желаю все самые крутые тачки\n" +
              "\n" +
              "чтоб были у тебя, и все самые лучше самки, если мало идей, обращайся ко мне, я тебе на каждую твою идею предложу сотню триллионов, как всё делать. Ну а я всё, я иду как глубокий старец,узревший вечное, прикоснувшийся к Божественному, сам стал богоподобен и устремлен в это бесконечное, и который в умиротворении, покое, гармонии, благодати, в этом сокровенном блаженстве пребывает, вовлеченный во всё и во вся, понимаешь, вот и всё, в этом наша разница. Так что я иду любоваться мирозданием, а ты идёшь преисполняться в ГРАНЯХ каких-то, вот и вся разница, понимаешь, ты не зришь это вечное бесконечное, оно тебе не нужно. Ну зато ты, так сказать, более активен, как вот этот дятел долбящий, или муравей, который очень активен в своей стезе, поэтому давай, наши пути здесь, конечно, имеют грани подобия, потому что всё едино, но я-то тебя прекрасно понимаю, а вот ты меня - вряд ли, потому что я как бы тебя в себе содержу, всю твою природу, она составляет одну маленькую там песчиночку, от того что есть во мне, вот и всё, поэтому давай, ступай, езжай, а я пошел наслаждаться прекрасным осенним закатом на берегу теплой южной реки. Всё, ступай, и я пойду.",
          date: "Только что"
        },
        {id: 4,
          user: {
            name: "Я",
            avatarUrl: "https://yt3.ggpht.com/ytc/AAUvwnhSSaF3Q-PyyTSis4EH6Cu8FZ32LNvkxI9Gl_rn=s900-c-k-c0x00ffffff-no-rj"
          },
          body: "А у тебя?",
          date: "Только что"
        }
      ]
    }
  },
  mounted() {
    this.$refs.chatHistory.scrollTop = this.$refs.chatHistory.scrollHeight;
  }
}
</script>

<style scoped>
.chat-history {
  background: #142A3B;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100vh - 210px);
}
ul {
  margin: 0;
  padding: 15px 15px 15px 0;
  overflow-y: scroll;
}
ul:hover {
  padding: 15px 5px 15px 0;
}
ul::-webkit-scrollbar {
  width: 10px;
  display: none;
}
ul:hover::-webkit-scrollbar {
  display: block;
}
ul::-webkit-scrollbar-track {
  background: #ffffff15;
}
ul::-webkit-scrollbar-thumb {
  background: #ffffff30;
}
ul::-webkit-scrollbar-thumb:hover {
  background: #ffffff50;
}

li {
  margin: 0;
  display: block;
}

.message {
  min-height: 60px;
  display: grid;
  grid-template-areas: "avatar body" "avatar date";
  grid-template-columns: 50px auto;
  position: relative;
  margin: 0 0 20px 0;
}

.message:last-child {
  margin: 0 0 40px 0;
}

.message-date {
  text-align: left;
  grid-area: date;
  color: #fff;
  opacity: .3;
  font-size: 12px;
  margin-top: 7px;
}

.message-avatar {
  grid-area: avatar;
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
  object-fit: cover;
}

.message-body-container {
  text-align: left;
  line-height: 150%;
  grid-area: body;
  color: #fff;
  opacity: .6;
  box-sizing: border-box;
  width: auto;
  max-width: calc(66% - 60px);
}

.message-body {
  display: inline-block;
  margin: 0;
  padding: 10px 15px;
  background: #0a181f;
}

.message.me {
  grid-template-areas: "body avatar" "date avatar";
  grid-template-columns: auto 50px;
}

.message.me .message-date {
  margin-left: auto;
}

.message.me .message-avatar {
  margin-left: auto;
}

.message.me .message-body-container {
  text-align: right;
  margin-left: auto;
}
</style>