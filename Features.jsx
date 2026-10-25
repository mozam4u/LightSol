 function Features() {

  const data = [
    {
      title:"AI Insights",
      desc:"Real-time predictive intelligence"
    },
    {
      title:"Cloud Platform",
      desc:"Scalable architecture"
    },
    {
      title:"Customer Experience",
      desc:"Modern buying journey"
    }
  ];

  return (
    <section className="features">

      <h2>Why Tekion Inspired Platform?</h2>

      <div className="grid">

        {data.map((item,index)=>(
          <div key={index} className="card">

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;
