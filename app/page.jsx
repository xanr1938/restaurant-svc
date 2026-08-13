import Link from "next/link"

export default function Home() {

  const items = [
    {
      itemId: "item_001",
      name: "Cheeseburger",
      "description": "Beef patty with cheese, lettuce, and tomato",
      "price": 8.99,
      "currency": "USD",
      "category": "Main Course",
      "available": true
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>สั่งอาหารล่วงหน้า</h1>
          <p>เลือกเมนู ระบุวันและเวลารับอาหารและเลือกร้านร้าน</p>

          <Link className="btn" href="/">ดูเมนูและเลือกร้าน</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>เมนูแนะนำ</h2>
          <div className="grid">
            {items.map((x) => (
              <div className="card" key={x.itemId}>
                <div className="food-img">{x.image || "🍚🍴"}</div>
                <h3></h3>
              </div>

            ))}

          </div>
        </div>
      </section>
    </>
  );
}
