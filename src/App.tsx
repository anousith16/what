import type { ReactNode } from "react";

type Clue = { id: number; content: ReactNode };

// รูปสำรอง (ภาพทิวทัศน์) กรณียังไม่ได้ใส่รูปจริง
const FALLBACK_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'>
      <defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0' stop-color='#c9ecff'/><stop offset='1' stop-color='#f0fbff'/>
      </linearGradient></defs>
      <rect width='300' height='300' fill='url(#s)'/>
      <ellipse cx='150' cy='60' rx='45' ry='22' fill='#fff'/>
      <path d='M0 215 Q80 170 170 205 T300 190 V300 H0Z' fill='#c6e08a'/>
      <path d='M0 250 Q110 190 300 240 V300 H0Z' fill='#8aa300'/>
    </svg>`
  );

// ====== แก้ข้อมูลคำใบ้ตรงนี้ ======
const clues: Clue[] = [
  { id: 1, content: <>Anousith Khanatip<br />(Tor)</> },
  { id: 2, content: "205Q0002/24" },
  { id: 3, content: "3CS2" },
  { id: 4, content: "ຄົນທີ່ຜົມສັ້ນໆ" },
  {
    id: 5,
    content: (
      <>
        <span className="clue-text">ຫາຕຸກກະຕາ Fyodor</span>
        {/* ใส่รูปจริงที่ public/clue5.jpg (ถ้าไม่มีจะแสดงรูปสำรอง) */}
        <img
          className="clue-img"
          src={`${import.meta.env.BASE_URL}clue5.jpg`}
          alt="คำใบ้ที่ 5"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src !== FALLBACK_IMG) img.src = FALLBACK_IMG;
          }}
        />
      </>
    ),
  },
];

export default function App() {
  return (
    <main className="page">
      <header className="head">
        <h1>Hi ຕາມຫາອ້າຍບັດດີ້ຢູ່ຫວາ?</h1>
        <p>ອ້າຍມີຄຳໃບ້ໃຫ້ 5 ຄຳໃບ້ ແຕ່ຈະມີຄຳໃບ້ທີ່ຜິດຢູ່ຂໍ້ 1</p>
      </header>

      <section className="grid">
        {clues.map((c) => (
          <article key={c.id} className={`card card-${c.id}`}>
            <h2>ຄຳໃບ້ທີ {c.id}</h2>
            <div className="card-body">{c.content}</div>
          </article>
        ))}
      </section>

      <footer>Created by Mr. Anousith Khanatip on October 4, 2026.</footer>
    </main>
  );
}
