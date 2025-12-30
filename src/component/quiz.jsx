import { useState, useEffect, useMemo } from "react";

export default function QuizLauncher() {
  const [open, setOpen] = useState(false);
  const [quizKey, setQuizKey] = useState(0);

  const startQuiz = () => {
    setQuizKey((k) => k + 1);
    setOpen(true);
  };

  const closeQuiz = () => {
    setOpen(false);
  };
  const [nilai, setNilai] = useState({
    q5:0,
    q6:0,
    q7:0,
    q8:0,
    q9:0,
    q10:0,
    q11:0,
    q12:0,
    q13:0,
    q14:0,
    q15:0,
    q16:0,
    q17:0,
    q18:0,
  })
  const onChange = (e) => {
    const {name, value} = e.target
    setNilai(prev => ({...prev, [name]: Number(value) || 0}))
  }
  const submitQuiz = () => {
    const total = Object.values(nilai).reduce((a, b) => a + b, 0);
    console.log("Total:", total);
    setOpen(false);
  };


  return (
    <div className="p-4">
      <button
        onClick={startQuiz}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Mulai Quiz
      </button>

      {open && (
        <Quiz
          key={quizKey}
          onCancel={closeQuiz}
          onSubmit={closeQuiz}
        />
      )}
    </div>
  );
}
function Radio1({ name, onChange }) {
  const options = [
    { value: 0, label: "Tidak selama sebulan terakhir" },
    { value: 1, label: "Kurang dari sekali seminggu" },
    { value: 2, label: "Sekali atau dua kali seminggu" },
    { value: 3, label: "Tiga kali atau lebih dalam seminggu" },
  ];

  return (
    <div className="flex flex-col gap-2 px-4 pb-2 w-full">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2 px-3 py-1 rounded cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            className="accent-white"
            onChange={onChange}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
function Radio2({ name, onChange }) {
  const options = [
    { value: 0, label: "Tidak ada masalah sama sekali" },
    { value: 1, label: "Hanya sedikit masalah" },
    { value: 2, label: "Agak bermasalah" },
    { value: 3, label: "Sangat bermasalah" },
  ];

  return (
    <div className="flex flex-col gap-2 px-4 pb-2 w-full">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2 px-3 py-1 rounded cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            className="accent-white"
            onChange={onChange}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
function Radio3({ name, onChange , submitQuiz}) {
  const options = [
    { value: 0, label: "Sangat baik" },
    { value: 1, label: "Cukup baik" },
    { value: 2, label: "Cukup buruk" },
    { value: 3, label: "Sangat buruk" },
  ];

  return (
    <div className="flex flex-col gap-2 px-4 pb-2 w-full">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2 px-3 py-1 rounded cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            className="accent-white"
            onChange={onChange}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
function Radio4({ name, onChange }) {
  const options = [
    { value: 0, label: "Tidak pernah" },
    { value: 1, label: "Jarang" },
    { value: 2, label: "Kadang-kadang" },
    { value: 3, label: "Cukup sering" },
    { value: 4, label: "Sangat sering" },
  ];

  return (
    <div className="flex flex-col gap-2 px-4 pb-2 w-full">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2 px-3 py-1 rounded cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            className="accent-white"
            onChange={onChange}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

function Quiz({ onCancel, onSubmit }) {
  return (
    <>
              <div className="rounded-[10px] pb-[10px] bg-green-600 text-white flex flex-col items-center mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-green-200 p-[10px] mb-[10px] text-black"><span>PITTSBURGH SLEEP QUALITY INDEX (PSQI)</span></div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>1. Selama bulan terakhir, kira-kira jam berapa Anda biasanya pergi tidur pada malam hari?  <br /></span></div>
            <div><label htmlFor="jam1" className="ml-[10px] mr-[5px]">Jam:</label>
            <input type="number" className="bg-blue-500 w-[50px]" min={0} id="jam1" name="jam1"/> : 
            <label htmlFor="menit1"> Menit:</label>
            <input type="number" className="bg-blue-500 w-[50px]" min={0} id="menit1" name="menit1"/></div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>2. Selama bulan terakhir, berapa lama (dalam menit) yang biasanya Anda butuhkan untuk tertidur setiap malam?<br /></span></div>
            <div><label htmlFor="jam2" className="ml-[10px] mr-[5px]">Jam:</label>
            <input type="number" className="bg-blue-500 w-[50px]" min={0} id="jam2" name="jam2"/> : 
            <label htmlFor="menit2"> Menit:</label>
            <input type="number" className="bg-blue-500 w-[50px]" min={0} id="menit2" name="menit2"/></div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>3. Selama bulan terakhir, kira-kira jam berapa Anda biasanya bangun di pagi hari?<br /></span></div>
            <div><label htmlFor="jam3" className="ml-[10px] mr-[5px]">Jam:</label>
            <input type="number" className="bg-blue-500 w-[50px]" min={0} id="jam3" name="jam3"/> : 
            <label htmlFor="menit3"> Menit:</label>
            <input type="number" className="bg-blue-500 w-[50px]" min={0} id="menit3" name="menit3"/></div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>4. Selama bulan terakhir, berapa jam aktual tidur Anda setiap malam? (Ini mungkin berbeda dengan jumlah jam yang Anda habiskan di tempat tidur)<br /></span></div>
            <div><label htmlFor="jam4" className="ml-[10px] mr-[5px]">Jam:</label>
            <input type="number" className="bg-blue-500 w-[50px]" min={0} id="jam4" name="jam4"/> / Malam</div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>5. Tidak dapat tidur dalam waktu 30 menit setelah berbaring<br /></span></div>
            <div>
                <Radio1 name="q5" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>6. Terbangun di tengah malam atau dini hari<br /></span></div>
            <div>
                <Radio1 name="q6" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>7. Harus bangun untuk pergi ke kamar mandi<br /></span></div>
            <div>
                <Radio1 name="q7" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>8. Tidak dapat bernapas dengan nyaman<br /></span></div>
            <div>
                <Radio1 name="q8" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>9. Batuk atau mendengkur dengan keras<br /></span></div>
            <div>
                <Radio1 name="q9" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>10. Merasa terlalu dingin<br /></span></div>
            <div>
                <Radio1 name="q10" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>11. Merasa terlalu panas<br /></span></div>
            <div>
                <Radio1 name="q11" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>12. Bermimpi buruk<br /></span></div>
            <div>
                <Radio1 name="q12" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>13. Mengalami rasa sakit<br /></span></div>
            <div>
                <Radio1 name="q13" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>14. Lainnya, sebutkan: <input type="text" id="qst14" name="qst14" placeholder="___________________________________"/><br /></span></div>
            <div>
                <Radio1 name="q14" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>15. Selama bulan terakhir, seberapa sering Anda menggunakan obat untuk membantu tidur (baik yang diresepkan dokter maupun "over the counter")?<br /></span></div>
            <div>
                <Radio1 name="q15" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>16. Selama bulan terakhir, seberapa sering Anda merasa mengantuk saat mengemudi, makan, atau melakukan aktivitas sosial? <br /></span></div>
            <div>
                <Radio1 name="q16" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>17. Selama bulan terakhir, seberapa besar masalah bagi Anda untuk menjaga antusiasme dalam menyelesaikan berbagai hal?  <br /></span></div>
            <div>
                <Radio2 name="q17" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>18. Selama bulan terakhir, secara keseluruhan bagaimana Anda menilai kualitas tidur Anda? <br /></span></div>
            <div>
                <Radio3 name="q18" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-green-600 text-white flex flex-col items-center mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-green-200 p-[10px] mb-[10px] text-black"><span>PERCEIVED STRESS SCALE (PSS-10)</span></div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>1. Dalam 1 bulan terakhir, seberapa sering Anda merasa kesal karena sesuatu yang terjadi secara tak terduga? <br /></span></div>
            <div>
                <Radio4 name="qS1" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>2. Dalam 1 bulan terakhir, seberapa sering Anda merasa tidak mampu mengendalikan hal-hal penting dalam hidup Anda?   <br /></span></div>
            <div>
                <Radio4 name="qS2" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>3. Dalam 1 bulan terakhir, seberapa sering Anda merasa gelisah atau stres?   <br /></span></div>
            <div>
                <Radio4 name="qS3" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>4. Dalam 1 bulan terakhir, seberapa sering Anda merasa percaya diri tentang kemampuan Anda menangani masalah pribadi? (Reverse item)   <br /></span></div>
            <div>
                <Radio4 name="qS4" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>5. Dalam 1 bulan terakhir, seberapa sering Anda merasa bahwa segala sesuatu berjalan sesuai keinginan Anda? (Reverse item)<br /></span></div>
            <div>
                <Radio4 name="qS5" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>6. Dalam 1 bulan terakhir, seberapa sering Anda merasa bahwa Anda tidak dapat mengatasi semua hal yang harus Anda lakukan?   <br /></span></div>
            <div>
                <Radio4 name="qS6" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>7. Dalam 1 bulan terakhir, seberapa sering Anda mampu mengendalikan iritasi dalam hidup Anda? (Reverse item)   <br /></span></div>
            <div>
                <Radio4 name="qS7" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>8. Dalam 1 bulan terakhir, seberapa sering Anda merasa bahwa Anda berada di atas segalanya? (Reverse item)   <br /></span></div>
            <div>
                <Radio4 name="qS8" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>9. Dalam 1 bulan terakhir, seberapa sering Anda merasa marah karena hal-hal yang terjadi di luar kendali Anda? <br /></span></div>
            <div>
                <Radio4 name="qS9" />
            </div>
        </div>
        <div className="rounded-[10px] pb-[10px] bg-blue-600 text-white flex flex-col mt-[20px]">
            <div className="rounded-t-[10px] w-[100%] bg-blue-200 p-[10px] mb-[10px] text-black self-center"><span>10. Dalam 1 bulan terakhir, seberapa sering Anda merasa kesulitan begitu banyak sehingga Anda merasa tidak dapat mengatasinya? <br /></span></div>
            <div>
                <Radio4 name="qS10" />
            </div>
        </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={submitQuiz}
          className="px-3 py-1 bg-green-600 text-white rounded"
        >
          Submit
        </button>
        <button
          onClick={onCancel}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          Batal
        </button>
      </div>
    </>

  );
}
