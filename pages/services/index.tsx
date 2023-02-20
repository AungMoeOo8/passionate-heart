import Service, { ServiceProps } from "../../components/commons/Service";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Services() {
  const services: ServiceProps[] = [
    {
      title: "Trauma counselling",
      description: `𝐓𝐫𝐚𝐮𝐦𝐚 𝐜𝐨𝐮𝐧𝐬𝐞𝐥𝐥𝐢𝐧𝐠 𝐚𝐧𝐝 𝐄𝐌𝐃𝐑 𝐓𝐡𝐞𝐫𝐚𝐩𝐲 မှာဆိုရင်-\n
      ကလေးဘဝ စိတ်ဒဏ်ရာ၊Complex trauma, ရုပ်ပိုင်း/စိတ်ခံစားချက်ပိုင်း/လိင်ပိုင်းဆိုင်ရာ ညှင်ပန်းနှိပ်စက်ခံရမှုကြောင့်ရရှိသော စိတ်ဒဏ်ရာ၊ လိင်ပိုင်းဆိုင်ရာစော်ကားမှုကြောင့် ရရှိတဲ့ စိတ်ဒဏ်ရာ၊ သဘာဝဘေးအန္တရာယ်ရဲ့ ရိုက်ခတ်မှုကြောင့်ရရှိတဲ့ စိတ်ဒဏ်ရာနဲ့ မတော်တဆမှု၊လူလုပ်ဘေးအန္တရာယ်ကြောင့် ရရှိတဲ့ စိတ်ဒဏ်ရာများကိုဆွေးနွေးကုသမှု ခံယူနိုင်ပါတယ်ရှင့်။
      `,
      fees: [
        {
          type: "Online trauma counselling",
          amount:
            "35000ks( One sessionကို မိနစ် 50 ပါရှင့်။ အဆင်ပြေတဲ့အချိန် ညှိနှိုင်းပြီး booking ယူလို့ရပါတယ်ရှင့်။",
        },
      ],
      ending:
        "Trauma counsellor နှင့်တွေ့ဆုံလိုပါက 𝟎𝟗 𝟗𝟖𝟕 𝟒𝟒𝟎 𝟐𝟓𝟔 သို့ ဖုန်းဆက်၍မေးမြန်းနိုင်ပါတယ်ရှင်။",
    },
    {
      title: "Trauma counselling and EMDR Terapy",
      description: `𝐓𝐫𝐚𝐮𝐦𝐚 𝐜𝐨𝐮𝐧𝐬𝐞𝐥𝐥𝐢𝐧𝐠 𝐚𝐧𝐝 𝐄𝐌𝐃𝐑 𝐓𝐡𝐞𝐫𝐚𝐩𝐲 မှာဆိုရင်-\n
      ကလေးဘဝ စိတ်ဒဏ်ရာ၊Complex trauma, ရုပ်ပိုင်း/စိတ်ခံစားချက်ပိုင်း/လိင်ပိုင်းဆိုင်ရာ ညှင်ပန်းနှိပ်စက်ခံရမှုကြောင့်ရရှိသော စိတ်ဒဏ်ရာ၊ လိင်ပိုင်းဆိုင်ရာ‌စော်ကားမှုကြောင့် ရရှိတဲ့ စိတ်ဒဏ်ရာ၊ သဘာဝဘေးအန္တရာယ်ရဲ့ ရိုက်ခတ်မှုကြောင့်ရရှိတဲ့ စိတ်ဒဏ်ရာနဲ့ မတော်တဆမှု၊လူလုပ်ဘေးအန္တရာယ်ကြောင့် ရရှိတဲ့ စိတ်ဒဏ်ရာများကိုဆွေးနွေးကုသမှု ခံယူနိုင်ပါတယ်ရှင့်
      `,
      fees: [
        { type: "Online counselling", amount: "40000ks" },
        { type: "Online trauma counselling", amount: "50000ks" },
      ],
      ending:
        "EMDR Consultant/ Psychologist နှင့်တွေ့ဆုံလိုပါက 𝟎𝟗 𝟗𝟖𝟕 𝟒𝟒𝟎 𝟐𝟓𝟔 သို့ ဖုန်းဆက်၍မေးမြန်းနိုင်ပါတယ်ရှင်။",
    },
    {
      title: "Psychiatrist Consultation",
      description: `𝐏𝐬𝐲𝐜𝐡𝐢𝐚𝐭𝐫𝐢𝐬𝐭 𝐂𝐨𝐧𝐬𝐮𝐥𝐭𝐚𝐭𝐢𝐨𝐧 မှာဆိုရင်-\n
      သောက်ဆေးလိုအပ်သော ကိုယ်တိုင်ထိန်းချုပ်မရသည့် စိတ်ပြဿနာများ၊ စိတ်ကြွစိတ်ကျ ပြဿနာ (bipolar) ကဲ့သို့ psychosis လက္ခဏာများ၊ Major Depression, လုံးဝအိပ်မပျော်တဲ့ ပြဿနာများကို သောက်ဆေးလမ်းညွှန်မှုနဲ့တကွ ကုသမှုခံယူနိုင်ပါတယ်။)
      `,
      fees: [
        { type: "Online", amount: "12000ks" },
        { type: "In person", amount: "25000ks" },
      ],
      ending:
        "Psychiatrist နှင့်တွေ့ဆုံလိုပါက 𝟎𝟗 𝟗𝟖𝟕 𝟒𝟒𝟎 𝟐𝟓𝟔 သို့ ဖုန်းဆက်၍မေးမြန်းနိုင်ပါတယ်ရှင်။",
    },
    {
      title: "Counselling Service",
      description: `𝐂𝐨𝐮𝐧𝐬𝐞𝐥𝐥𝐢𝐧𝐠 𝐒𝐞𝐫𝐯𝐢𝐜𝐞 မှာဆိုရင်-\n
      စိတ်ဖိစီးမှု၊ စိုးရိမ်ပူပန်မှု၊ စိတ်ခံစားမှုဆိုင်ရာပြဿနာ၊ လူမှုဆက်ဆံရေးပြဿနာများ၊ အလုပ်ခွင်ဖိစီးမှုနှင့် အဆင်မပြေမှု၊ အပြုအမူပိုင်းဆိုင်ရာပြဿနာ၊ ကိုယ်ရည်ကိုယ်သွေးဆိုင်ရာပြဿနာများကိုဆွေးနွေးနိုင်ပါတယ်။
      `,
      fees: [
        { type: "Online", amount: "25000ks" },
        {
          type: "In person",
          amount:
            "35000ks ( One sessionကို မိနစ် 50 ပါရှင့်။ အဆင်ပြေတဲ့အချိန် ညှိနှိုင်းပြီး booking ယူလို့ရပါတယ်ရှင့်။)",
        },
      ],
      ending:
        "Counsellor နှင့်တွေ့ဆုံလိုပါက 𝟎𝟗 𝟗𝟖𝟕 𝟒𝟒𝟎 𝟐𝟓𝟔 သို့ ဖုန်းဆက်၍မေးမြန်းနိုင်ပါတယ်ရှင်။",
    },
    {
      title: "Psychological Tests",
      description: `𝐏𝐬𝐲𝐜𝐡𝐨𝐥𝐨𝐠𝐢𝐜𝐚𝐥 𝐓𝐞𝐬𝐭𝐬 တွေမှာတော့\n
    လူတဦးချင်းစီ ဖြစ်စေ၊ အဖွဲ့အစည်း အလိုက်ဖြစ်စေ စိတ်ပိုင်းဆိုင်ရာ စစ်ဆေးလွှာများ ဖြစ်တဲ့ ကိုယ်ရည်ကိုယ်သွေး (Personality Test)၊ လူမူ့ဆက်ဆံရေး (Communication Tests)၊ Emotional Intelligent Test) စိတ်ခံစားမူ့ဉာဏ်ရည် အစရှိသော စစ်ဆေးလွှာများကို စစ်ဆေးပေးခြင်းများ ဆောင်ရွက်ပေးနေပါတယ် ။ စစ်ဆေးလွှာများ စစ်ဆေးခြင်းဖြင့် မိမိတို့၏ အသက်မွေးဝမ်းကြောင်းမှု့၊ လုမူ့ဆက်ဆံရေး၊ လုပ်ငန်းခွင် စသည်တို့နှင့် ဆက်စပ်၍ မိမိကိုယ့်ကို ပိုမိုသိမြင်လာပြီး အံဝင်ဂွင်ကျ ပေါင်းစပ် အသုံး ပြု နိုင်စေရန် ရည်ရွယ်ပါသည်။`,
      fees: [
        {
          type: "Fees",
          amount:
            "15000𝐊𝐬 ( 𝐈𝐧𝐜𝐥𝐮𝐝𝐢𝐧𝐠 𝟐𝟎-𝟑𝟎 𝐦𝐢𝐧𝐬 𝐢𝐧𝐭𝐞𝐫𝐩𝐫𝐞𝐭𝐚𝐭𝐢𝐨𝐧 𝐰𝐢𝐭𝐡 𝐩𝐫𝐚𝐜𝐭𝐢𝐭𝐢𝐨𝐧𝐞𝐫 )",
        },
      ],
      ending:
        "Psychological နှင့်တွေ့ဆုံလိုပါက 𝟎𝟗 𝟗𝟖𝟕 𝟒𝟒𝟎 𝟐𝟓𝟔 သို့ ဖုန်းဆက်၍မေးမြန်းနိုင်ပါတယ်ရှင်။",
    },
  ];

  return (
    <>
      <Head>
        <title>Passionate Heart | Services</title>
      </Head>
      <div className="container-sm">
        <p className="text-3xl font-bold mt-8 mb-14">We offer these services</p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </>
  );
}
