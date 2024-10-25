import { ServiceProps } from "../types";

const TraumaCounselling: ServiceProps = {
  title: "Trauma counselling",
  description: `ကလေးဘဝ စိတ်ဒဏ်ရာ၊ Complex trauma, ရုပ်ပိုင်း/စိတ်ခံစားချက်ပိုင်း/လိင်ပိုင်းဆိုင်ရာ ညှင်းပန်းနှိပ်စက်ခံရမှုကြောင့်ရရှိသော စိတ်ဒဏ်ရာ၊ လိင်ပိုင်းဆိုင်ရာစော်ကားမှုကြောင့် ရရှိတဲ့ စိတ်ဒဏ်ရာ၊ သဘာဝဘေးအန္တရာယ်ရဲ့ ရိုက်ခတ်မှုကြောင့်ရရှိတဲ့ စိတ်ဒဏ်ရာနဲ့ မတော်တဆမှု၊ လူလုပ်ဘေးအန္တရာယ်ကြောင့် ရရှိတဲ့ စိတ်ဒဏ်ရာများကို ဆွေးနွေးကုသမှုခံယူနိုင်ပါတယ်ရှင့်။`,
  fees: [
    {
      type: "Online",
      amount: 50000,
      description:
        "(One sessionကို မိနစ် 50 ပါရှင့်။ အဆင်ပြေတဲ့အချိန် ညှိနှိုင်းပြီး booking ယူလို့ရပါတယ်ရှင့်။)",
    },
  ],
  ending:
    "Trauma counsellor နှင့်တွေ့ဆုံလိုပါက Facebook Messenger သို့ ဆက်သွယ်၍မေးမြန်းနိင်ပါတယ်။",
}

const EMDRTherapy: ServiceProps = {
  title: "Trauma counselling and EMDR Therapy",
  description: `ကလေးဘဝ စိတ်ဒဏ်ရာ၊Complex trauma, ရုပ်ပိုင်း/စိတ်ခံစားချက်ပိုင်း/လိင်ပိုင်းဆိုင်ရာ ညှင်းပန်းနှိပ်စက်ခံရမှုကြောင့်ရရှိသော စိတ်ဒဏ်ရာ၊ လိင်ပိုင်းဆိုင်ရာ‌စော်ကားမှုကြောင့် ရရှိတဲ့ စိတ်ဒဏ်ရာ၊ သဘာဝဘေးအန္တရာယ်ရဲ့ ရိုက်ခတ်မှုကြောင့်ရရှိတဲ့ စိတ်ဒဏ်ရာနဲ့ မတော်တဆမှု၊လူလုပ်ဘေးအန္တရာယ်ကြောင့် ရရှိတဲ့ စိတ်ဒဏ်ရာများကိုဆွေးနွေးကုသမှု ခံယူနိုင်ပါတယ်ရှင့်။`,
  fees: [
    { type: "Online counselling", amount: 40000 },
    { type: "Online trauma counselling", amount: 50000 },
  ],
  ending:
    "EMDR Consultant/ Psychologist နှင့်တွေ့ဆုံလိုပါက Facebook Messenger သို့ ဆက်သွယ်၍မေးမြန်းနိင်ပါတယ်။",
}

const PsychiatristConsultation: ServiceProps = {
  title: "Psychiatrist Consultation",
  description: `သောက်ဆေးလိုအပ်သော ကိုယ်တိုင်ထိန်းချုပ်မရသည့် စိတ်ပြဿနာများ၊ စိတ်ကြွစိတ်ကျ ပြဿနာ (bipolar) ကဲ့သို့ psychosis လက္ခဏာများ၊ Major Depression, လုံးဝအိပ်မပျော်တဲ့ ပြဿနာများကို သောက်ဆေးလမ်းညွှန်မှုနဲ့တကွ ကုသမှုခံယူနိုင်ပါတယ်။`,
  fees: [
    { type: "Online", amount: 15000 },
  ],
  ending:
    "Psychiatrist နှင့်တွေ့ဆုံလိုပါက Facebook Messenger သို့ ဆက်သွယ်၍မေးမြန်းနိင်ပါတယ်။",
}

const Counselling: ServiceProps = {
  title: "Counselling Service",
  description: `စိတ်ဖိစီးမှု၊ စိုးရိမ်ပူပန်မှု၊ စိတ်ခံစားမှုဆိုင်ရာပြဿနာ၊ လူမှုဆက်ဆံရေးပြဿနာများ၊ အလုပ်ခွင်ဖိစီးမှုနှင့် အဆင်မပြေမှု၊ အပြုအမူပိုင်းဆိုင်ရာပြဿနာ၊ ကိုယ်ရည်ကိုယ်သွေးဆိုင်ရာပြဿနာများကိုဆွေးနွေးနိုင်ပါတယ်။`,
  fees: [
    {
      type: "Counsellor",
      amount: 40000,
      description: "",
    },
    {
      type: "Mental Health Practitioner",
      amount: 35000,
      description:
        "(One sessionကို မိနစ် 50 ပါရှင့်။ အဆင်ပြေတဲ့အချိန် ညှိနှိုင်းပြီး booking ယူလို့ရပါတယ်ရှင့်။)",
    },
  ],
  ending:
    "Counsellor နှင့်တွေ့ဆုံလိုပါက Facebook Messenger သို့ ဆက်သွယ်၍မေးမြန်းနိင်ပါတယ်။",
}

const PsychologicalTest: ServiceProps = {
  title: "Psychological Tests",
  description: `လူတစ်ဦးချင်းစီ ဖြစ်စေ၊ အဖွဲ့အစည်း အလိုက်ဖြစ်စေ စိတ်ပိုင်းဆိုင်ရာ စစ်ဆေးလွှာများ ဖြစ်တဲ့ ကိုယ်ရည်ကိုယ်သွေး (Personality Test)၊ လူမှုဆက်ဆံရေး (Communication Tests)၊ Emotional Intelligent Test) စိတ်ခံစားမှုဉာဏ်ရည် အစရှိသော စစ်ဆေးလွှာများကို စစ်ဆေးပေးခြင်းများ ဆောင်ရွက်ပေးနေပါတယ် ။ စစ်ဆေးလွှာများ စစ်ဆေးခြင်းဖြင့် မိမိတို့၏ အသက်မွေးဝမ်းကြောင်းမှု၊ လူမှုဆက်ဆံရေး၊ လုပ်ငန်းခွင် စသည်တို့နှင့် ဆက်စပ်၍ မိမိကိုယ်ကို ပိုမိုသိမြင်လာပြီး အံဝင်ခွင်ကျ ပေါင်းစပ်အသုံးပြုနိုင်စေရန် ရည်ရွယ်ပါသည်။`,
  fees: [
    {
      type: "Online",
      amount: 15000,
      description: "(Including interpretation session with Psychological)",
    },
  ],
  ending:
    "Psychologist နှင့်တွေ့ဆုံလိုပါက Facebook Messenger သို့ ဆက်သွယ်၍မေးမြန်းနိင်ပါတယ်။",
}

export default [
  TraumaCounselling,
  EMDRTherapy,
  PsychiatristConsultation,
  Counselling,
  PsychologicalTest,
];
