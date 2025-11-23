const LESSONS = [
  {
    id: "intro-1",
    name: "自我介紹",
    items: [
      { text: "我叫黃奕，依家喺Newcastle University讀緊PhD。", formal: "我叫黄奕，现在在纽卡斯尔大学攻读博士。", jyutping: "ngo5 giu3 wong4 jik6, ji1 gaa1 hai2 Newcastle University duk6 gan2 PhD.", image: "https://api.iconify.design/mdi/account.svg" },
      { text: "我宜家讀緊Biostatistics in Rare Diseases，讀四年，如無意外2029年畢業。", formal: "我现在在读 Biostatistics in Rare Diseases，学制四年，如无意外 2029 年毕业。", jyutping: "ngo5 ji4 gaa1 duk6 gan2 Biostatistics in Rare Diseases, duk6 sei3 nin4, jyu4 mou4 ji3 ngoi6 ji6 ling4 ji6 gau2 nin4 bat1 jip6.", image: "https://api.iconify.design/mdi/dna.svg" },
      { text: "目前計劃讀完PhD會返國內發展，不過宜家仲係言之尚早，始終改變趕唔上變化。", formal: "目前计划读完 PhD 会回国内发展，不过现在仍言之尚早，始终改变赶不上变化。", jyutping: "muk6 cin4 gai3 waak6 duk6 jyun4 PhD wui5 faan1 gwok3 noi6 faat3 zin2, bat1 gwo3 ji4 gaa1 zung6 hai6 jin4 zi1 soeng6 zou2, ci2 zung1 goi2 bin3 gon2 m4 soeng6 bin3 faa3.", image: "https://api.iconify.design/mdi/airplane.svg" },
      { text: "我而家讀緊第一年，每個禮拜要見導師一次，其他時間自己分配，可以work from home，學校都有一個辦公位俾我，同埋有買部新手提電腦俾我。", formal: "我现在读第一年，每周要见导师一次，其他时间自己分配，可以在家办公，学校也有一个办公位给我，并且给我买了一台新的笔记本电脑。", jyutping: "ngo5 ji4 gaa1 duk6 gan2 dai6 jat1 nin4, mui5 go3 lai5 baai3 jiu3 gin3 dou6 si1 jat1 ci3, kei4 taa1 si4 gaan3 zi6 gei2 fan1 pui3, ho2 ji5 work from home, hok6 haau6 dou1 jau5 jat1 go3 baan6 gung1 wai2 bei2 ngo5, tung4 maai4 jau5 maai5 bou6 san1 sau2 tai4 din6 nou5 bei2 ngo5.", image: "https://api.iconify.design/mdi/calendar.svg" },
      { text: "我平時得閒會做運動，比較鍾意同人有互動，例如踢波、打羽毛球，最近開始接觸打桌球，因為覺得當我專注嘅時候，可以進入心流嘅狀態，我好享受呢個感覺。", formal: "我平时有空会做运动，比较喜欢与人互动，例如踢足球、打羽毛球，最近开始接触打台球，因为觉得当我专注的时候，可以进入心流状态，我很享受这种感觉。", jyutping: "ngo5 ping4 si4 dak1 haan4 wui5 zou6 wan6 dung6, bei2 gaau3 zung1 ji3 tung4 jan4 jau5 wu6 dung6, lai6 jyu4 tek3 bo1, daa2 jyu5 mou4 kau4, zeoi3 gan6 hoi1 ci2 zip3 cuk1 daa2 coek3 kau4, jan1 wai6 gok3 dak1 dong1 ngo5 zyun1 zyu3 ge3 si4 hau6, ho2 ji5 zeon3 jap6 sam1 lau4 ge3 zong6 taai3, ngo5 hou2 hoeng2 sau6 ni1 go3 gam2 gok3.", image: "https://api.iconify.design/mdi/soccer.svg" },
      { text: "我除咗讀書，仲有同人合作做Podcast，做嘅主題係圍繞女性創業，Podcast名叫做Foundhers她滙，有興趣可以去小宇宙同埋Spotify收聽，小宇宙主要係中文訪問而Spotify就係英文訪問為主。", formal: "我除了读书，还与人合作做 Podcast，主题围绕女性创业，Podcast 名叫 Foundhers 她滙，有兴趣可以去小宇宙和 Spotify 收听，小宇宙主要是中文访谈而 Spotify 则以英文访谈为主。", jyutping: "ngo5 ceoi4 zo2 duk6 syu1, zung6 jau5 tung4 jan4 hap6 zok3 zou6 Podcast, zou6 ge3 zyu2 tai4 hai6 wai4 jiu5 neoi5 sing3 cong3 jip6, Podcast meng2 giu3 zou6 Foundhers taa1 wui6, jau5 hing3 ceoi3 ho2 ji5 heoi3 siu2 jyu5 zau6 tung4 maai4 Spotify sau1 ting1, siu2 jyu5 zau6 zyu2 jiu3 hai6 zung1 man4 fong2 man6 ji4 Spotify ze2 hai6 jing1 man4 fong2 man6 wai4 zyu2.", image: "https://api.iconify.design/mdi/microphone.svg" }
    ],
  },
  {
    id: "daily-1",
    name: "日常用語 1",
    items: [
      {
        text: "返學詞彙：返學、上堂、老師、同學、實驗室、報告、功課、請假、約時間、交作業",
        formal: "上学词汇：上学、上课、老师、同学、实验室、报告、作业、请假、约时间、提交作业",
        jyutping: "faan1 hok6, soeng5 tong4, lou5 si1, tung4 hok6, sat6 jim6 sat1, bou3 gou3, gung1 fo3, cing2 gaa3, joek3 si4 gaan3, gaau1 zok3 jip6",
        image: "https://api.iconify.design/mdi/format-list-bulleted.svg",
        vocab: ["返學","上堂","老師","同學","實驗室","報告","功課","請假","約時間","開zoom meeting"]
      },
      {
        text: "早晨呀～我宜家趕住出門，遲啲再講！",
        formal: "早上好～我现在赶着出门，晚点再说！",
        jyutping: "zou2 san4 aa3 ~ ngo5 ji4 gaa1 gon2 zyu6 ceot1 mun4, ci4 di1 zoi3 gong2!",
        image: "https://api.iconify.design/mdi/clock-fast.svg"
      },
      {
        text: "「唔該」多用於請求或小幫手; 「多謝」用於表達感謝",
        formal: "“麻烦/劳驾”多用于请求或小帮忙；“谢谢”用于表达感谢",
        jyutping: "m4 goi1 bong1 ngo5 hoi1 mun4 / m4 goi1 saai3. do1 ze6 nei5 bong1 ngo5 goi2 man4.",
        image: "https://api.iconify.design/mdi/handshake-outline.svg"
      },
      {
        text: "唔該晒你幫我搵拖板。",
        formal: "麻烦你帮我找拖线板，谢谢。",
        jyutping: "m4 goi1 saai3 nei5 bong1 ngo5 wan2 to1 baan2.",
        image: "https://api.iconify.design/mdi/power-socket-uk.svg"
      },
      {
        text: "多謝你教我打桌球。",
        formal: "谢谢你教我打台球。",
        jyutping: "do1 ze6 nei5 gaau3 ngo5 daa2 coek3 kau4.",
        image: "https://api.iconify.design/mdi/table-tennis.svg"
      },
      {
        text: "「對唔住」用於表達真心道歉／犯咗錯；「唔好意思」用於表達禮貌／輕微打擾／小事",
        formal: "“对不起”用于表达真诚道歉/犯了错；“不好意思”用于表达礼貌/轻微打扰/小事",
        jyutping: "deoi3 m4 zyu6 jung6 jyu5 biu2 daat6 zan1 sam1 dou6 hip3 / faan6 zo2 co3; m4 hou2 ji3 si1 jung6 jyu5 biu2 daat6 lai5 maau6 / hing1 mei4 daa2 jiu3 / siu2 si6",
        image: "https://api.iconify.design/mdi/information-outline.svg"
      },
      {
        text: "對唔住我遲咗。",
        formal: "抱歉我迟了。",
        jyutping: "deoi3 m4 zyu6 ngo5 ci4 zo2.",
        image: "https://api.iconify.design/mdi/emoticon-sad-outline.svg"
      },
      {
        text: "唔好意思，想問下洗手間喺邊？",
        formal: "不好意思，想问下洗手间在哪里？",
        jyutping: "m4 hou2 ji3 si1, soeng2 man6 haa5 sai2 sau2 gaan1 hai2 bin1?",
        image: "https://api.iconify.design/mdi/toilet.svg"
      },
      
    ],
  },
];

const els = {
  voiceRefresh: document.getElementById("voice-refresh"),
  voiceSelect: document.getElementById("voice-select"),
  lessonSelect: document.getElementById("lesson-select"),
  cards: document.getElementById("cards"),
  supportWarnings: document.getElementById("support-warnings"),
};

let voices = [];
let selectedLesson = LESSONS[0];

function initLessonSelect() {
  els.lessonSelect.innerHTML = LESSONS.map(
    (l) => `<option value="${l.id}">${l.name}</option>`
  ).join("");
  els.lessonSelect.value = selectedLesson.id;
  els.lessonSelect.addEventListener("change", (e) => {
    const id = e.target.value;
    selectedLesson = LESSONS.find((l) => l.id === id) || LESSONS[0];
    renderCards();
  });
}

function renderCards() {
  els.cards.innerHTML = selectedLesson.items
    .map((item, idx) => {
      const iconClass = isIcon(item.image) ? 'icon' : '';
      return `
        <article class="card" data-index="${idx}">
          <div class="media">
            <img class="${iconClass}" src="${item.image}" alt="${item.text}" />
          </div>
          <div class="body">
            <div class="title">${item.text}</div>
            <div class="jyutping">${item.jyutping}</div>
            ${item.formal ? `<div class=\"formal\">${item.formal}</div>` : ""}
            ${item.vocab ? `<div class=\"vocab\"><label>詞彙：<select class=\"vocab-select\">${item.vocab.map(v=>`<option value=\"${v}\">${v}</option>`).join('')}</select></label></div>` : ""}
            <div class="actions">
              <button class="play-tts">播放讀音</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  els.cards.querySelectorAll(".play-tts").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      const idx = Number(card.dataset.index);
      const item = selectedLesson.items[idx];
      speak(item.text);
    });
  });

  els.cards.querySelectorAll(".vocab-select").forEach((sel) => {
    sel.addEventListener("change", (e) => {
      const val = e.target.value;
      if (val) speak(val);
    });
  });
}

function isIcon(url) {
  return typeof url === 'string' && url.endsWith('.svg');
}

function loadVoices() {
  voices = speechSynthesis.getVoices();
  els.voiceSelect.innerHTML = voices
    .map((v, i) => `<option value="${i}">${v.name} (${v.lang})</option>`)
    .join("");

  const hkIndex = voices.findIndex((v) => v.lang.toLowerCase().startsWith("zh-hk"));
  els.voiceSelect.value = hkIndex >= 0 ? String(hkIndex) : "0";
}

function speak(text) {
  if (!window.speechSynthesis) {
    warn("你的瀏覽器不支援語音合成（TTS）。");
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  const v = voices[Number(els.voiceSelect.value)] || voices[0];
  if (v) utter.voice = v;
  utter.lang = (v && v.lang) || "zh-HK";
  utter.rate = 0.95;
  utter.pitch = 1;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function warn(msg) {
  const div = document.createElement("div");
  div.className = "warn";
  div.textContent = msg;
  els.supportWarnings.appendChild(div);
}

function clearWarnings() {
  els.supportWarnings.innerHTML = "";
}


function initVoiceUI() {
  els.voiceRefresh.addEventListener("click", () => loadVoices());
  if (typeof speechSynthesis !== "undefined") {
    speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  } else {
    warn("你的瀏覽器不支援語音合成（TTS）。");
  }
}

function init() {
  initLessonSelect();
  renderCards();
  initVoiceUI();
}

document.addEventListener("DOMContentLoaded", init);