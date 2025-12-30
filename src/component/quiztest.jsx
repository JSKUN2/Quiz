import { useState, useEffect, setError } from "react";

const quizDataPSQI = {
    tipe1 : [{
        id: "q11",
        text: "1. Selama bulan terakhir, kira-kira jam berapa Anda biasanya pergi tidur pada malam hari?  "
    },
    {
        id: "q13",
        text: "2. Selama bulan terakhir, kira-kira jam berapa Anda biasanya bangun di pagi hari?"
    },
    ],
    tipe2 : [{
        id: "q21",
        text: "3. Selama bulan terakhir, berapa jam aktual tidur Anda setiap malam? (Ini mungkin berbeda dengan jumlah jam yang Anda habiskan di tempat tidur)"
    }],
    tipe3:[{
        id: "q12",
        text: "4. Selama bulan terakhir, berapa lama (dalam menit) yang biasanya Anda butuhkan untuk tertidur setiap malam?"
    },],
    tipe4 : [{
        id: "q31",
        text: "5. Tidak dapat tidur dalam waktu 30 menit setelah berbaring",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q32",
        text: "6. Terbangun di tengah malam atau dini hari",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q33",
        text: "7. Harus bangun untuk pergi ke kamar mandi",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q34",
        text: "8. Tidak dapat bernapas dengan nyaman",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q35",
        text: "9. Batuk atau mendengkur dengan keras",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q36",
        text: "10. Merasa terlalu dingin",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q37",
        text: "11. Merasa terlalu panas",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q38",
        text: "12. Bermimpi buruk",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q39",
        text: "13. Mengalami rasa sakit",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q310",
        text: "14. Mengalami gangguan selain rasa sakit",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q311",
        text: "15. Selama bulan terakhir, seberapa sering Anda menggunakan obat untuk membantu tidur (baik yang diresepkan dokter maupun 'over the counter')?",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q312",
        text: "16. Selama bulan terakhir, seberapa sering Anda merasa mengantuk saat mengemudi, makan, atau melakukan aktivitas sosial?  ",
        labelPilgan: ["Tidak selama sebulan terakhir", "Kurang dari sekali seminggu", "Sekali atau dua kali seminggu", "Tiga kali atau lebih dalam seminggu"],
        value: [0,1,2,3]
    },
    {
        id: "q313",
        text: "17. Selama bulan terakhir, seberapa besar masalah bagi Anda untuk menjaga antusiasme dalam menyelesaikan berbagai hal?",
        labelPilgan: ["Tidak ada masalah sama sekali", "Hanya sedikit masalah", "Agak bermasalah", "Sangat bermasalah"],
        value: [0,1,2,3]
    },
    {
        id: "q314",
        text: "18. Selama bulan terakhir, secara keseluruhan bagaimana Anda menilai kualitas tidur Anda?",
        labelPilgan: ["Sangat baik", "Cukup baik", "Cukup buruk", "Sangat buruk"],
        value: [0,1,2,3]
    },
    ]
}

const quizDataPSS = [
    {
    id:"qt1",
    text: "1. Dalam 1 bulan terakhir, seberapa sering Anda merasa kesal karena sesuatu yang terjadi secara tak terduga?",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [0,1,2,3,4]
    },
    {
    id:"qt2",
    text: "2. Dalam 1 bulan terakhir, seberapa sering Anda merasa tidak mampu mengendalikan hal-hal penting dalam hidup Anda?",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [0,1,2,3,4]
    },
    {
    id:"qt3",
    text: "3. Dalam 1 bulan terakhir, seberapa sering Anda merasa gelisah atau stres?",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [0,1,2,3,4]
    },
    {
    id:"qt4",
    text: "4. Dalam 1 bulan terakhir, seberapa sering Anda merasa percaya diri tentang kemampuan Anda menangani masalah pribadi? (Reverse item)  ",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [4,3,2,1,0]
    },
    {
    id:"qt5",
    text: "5. Dalam 1 bulan terakhir, seberapa sering Anda merasa bahwa segala sesuatu berjalan sesuai keinginan Anda? (Reverse item)",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [4,3,2,1,0]
    },
    {
    id:"qt6",
    text: "6. Dalam 1 bulan terakhir, seberapa sering Anda merasa bahwa Anda tidak dapat mengatasi semua hal yang harus Anda lakukan?",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [0,1,2,3,4]
    },
    {
    id:"qt7",
    text: "7. Dalam 1 bulan terakhir, seberapa sering Anda mampu mengendalikan iritasi dalam hidup Anda? (Reverse item)",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [4,3,2,1,0]
    },
    {
    id:"qt8",
    text: "8. Dalam 1 bulan terakhir, seberapa sering Anda merasa bahwa Anda berada di atas segalanya? (Reverse item)  ",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [4,3,2,1,0]
    },
    {
    id:"qt9",
    text: "9. Dalam 1 bulan terakhir, seberapa sering Anda merasa marah karena hal-hal yang terjadi di luar kendali Anda?",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [0,1,2,3,4]
    },
    {
    id:"qt10",
    text: "10. Dalam 1 bulan terakhir, seberapa sering Anda merasa kesulitan begitu banyak sehingga Anda merasa tidak dapat mengatasinya?",
    labelPilgan: ["Tidak pernah", "Jarang", "Kadang-kadang","Cukup sering","Sangat sering"],
    value: [0,1,2,3,4]
    },
]
function submit(lat, long, psqi, pss){
}
function PSQI({ answers, setAnswers, goToPSS }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>PSQI</h1>

      {quizDataPSQI.tipe1.map((e) => (
        <div key={e.id}>
          <h3>{e.text}</h3>

          <input
            type="number"
            placeholder="Jam"
            name={`${e.id}_jam`}
            value={answers[`${e.id}_jam`] || ""}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Menit"
            name={`${e.id}_menit`}
            value={answers[`${e.id}_menit`] || ""}
            onChange={handleChange}
          />
        </div>
      ))}

      {quizDataPSQI.tipe2.map((e) => (
        <div key={e.id}>
          <h3>{e.text}</h3>
          <input
            type="number"
            name={e.id}
            value={answers[e.id] || ""}
            onChange={handleChange}
          />{" "}
          jam
        </div>
      ))}
      {quizDataPSQI.tipe3.map((e) => (
        <div key={e.id}>
          <h3>{e.text}</h3>
          <input
            type="number"
            name={e.id}
            value={answers[e.id] || ""}
            onChange={handleChange}
          />{" "}
          menit
        </div>
      ))}

      {quizDataPSQI.tipe4.map((e) => (
        <div key={e.id}>
          <h3>{e.text}</h3>
          <div className="flex flex-col">
          {e.labelPilgan.map((label, index) => {
            const val = e.value[index];
            return (
              <label key={index}>
                <input
                  type="radio"
                  name={e.id}
                  value={val}
                  checked={answers[e.id] === String(val)}
                  onChange={handleChange}
                />
                {label}
              </label>
            );
          })}</div>
        </div>
      ))}

      <button onClick={goToPSS}>Next</button>
    </>
  );
}

function PSS({ answers, setAnswers, goToPSQI, submit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>PSS</h1>

      {quizDataPSS.map((e) => (
        <div key={e.id}>
          <h3>{e.text}</h3>

          {e.labelPilgan.map((label, index) => {
            const val = e.value[index];
            return (
              <label key={index}>
                <input
                  type="radio"
                  name={e.id}
                  value={val}
                  checked={answers[e.id] === String(val)}
                  onChange={handleChange}
                />
                {label}
              </label>
            );
          })}
        </div>
      ))}

      <button onClick={goToPSQI}>Back</button>
      <button onClick={submit}>Submit</button>
    </>
  );
}

export default function Quiz() {
  const [page, setPage] = useState("psqi");
  const [coords, setCoords] = useState({ lat: null, long: null });
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(null);

  const submit = () => {
    console.log("HASIL:", answers);

    const total = Object.values(answers)
      .map(Number)
      .filter((n) => !isNaN(n))
      .reduce((a, b) => a + b, 0);

    alert(`Total skor: ${total}`);
  };
  let val1, val2, val3, val4, val5, val6_raw, val6, val7, total, val1_raw, total2
  total2=0
  let val4_raw = 0
  let aktualTidur = Number(answers.q21) * 60;
  let tidur =
    Number(answers.q11_jam) * 60 + Number(answers.q11_menit);
  let bangun =
    Number(answers.q13_jam) * 60 + Number(answers.q13_menit);
  let tempatTidur = bangun - tidur;
  if (tempatTidur <= 0) tempatTidur += 1440;
  let val2_percentage = (aktualTidur / tempatTidur) * 100;

  if (val2_percentage > 85) {
    val2 = 0;
  } else if (val2_percentage >= 75) {
    val2 = 1;
  } else if (val2_percentage >= 65) {
    val2 = 2;
  } else {
    val2 = 3;
  }

  if(Number(answers["q12"]) > 30 && Number(answers["q12"]) <= 60){
    val1_raw = 1 + Number(answers["q31"])
  }
  else if(Number(answers["q12"]) > 60){
    val1_raw = 2 + Number(answers["q31"])
  }
  else{val1_raw = 0 + Number(answers["q31"])}
  if(val1_raw < 1){
    val1 = 0
  }
  else if(val1_raw<3){
    val1 = 1
  }
  else if(val1_raw<5){
    val1 = 2
  }else{val1=3}

  if(Number(answers["q21"])>7){
    val3 = 0
  }
  else if(Number(answers["q21"])>=6){
    val3 = 1
  }
  else if(Number(answers["q21"])>=5){
    val3 = 2
  }else{val3 = 3}

  for (let i = 1; i <= 9; i++) {
    val4_raw += Number(answers["q3" + i]) || 0;
  }
  if (val4_raw === 0) val4 = 0;
  else if (val4_raw > 18) val4 = 3;
  else if (val4_raw > 9) val4 = 2;
  else val4 = 1;


  val5 = Number(answers["q314"])
  val6_raw = Number(answers["q312"]) + Number(answers["q313"])
  if (val6_raw === 0) val6 = 0;
  else if (val6_raw > 4) val6 = 3;
  else if (val6_raw > 2) val6 = 2;
  else val6 = 1;

  val7 = Number(answers["q311"])
  total = val1+val2+val3+val4+val5+val6+val7
  for(let i = 1; i <= 10; i++){
    total2 = Number(answers["qt"+String(i)])
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      (error) => console.error(error)
    );
  }, []);
  console.log(coords.lat, coords.long)
  return (
    <>
      {page === "psqi" && (
        <PSQI
          answers={answers}
          setAnswers={setAnswers}
          goToPSS={() => setPage("pss")}
        />
      )}

      {page === "pss" && (
        <PSS
          answers={answers}
          setAnswers={setAnswers}
          goToPSQI={() => setPage("psqi")}
          submit={submit}
        />
      )}
      <pre>{coords.lat}<br></br>{coords.long}</pre>
    </>
  );
}
