import React from "react";

const Experience: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container">
        <h1 className="text-4xl text-center font-medium mb-12">
          My <span className="font-bold">Experience</span>
        </h1>

        <div className="flex flex-col gap-8">
          {/* card */}
          <div className="flex flex-col gap-8 border rounded-sm py-8 px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between">
              <h3 className="text-2xl font-semibold">Frontend Developer</h3>
              <p>Nov 2020 - Present</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
              harum alias sapiente ullam dolorem temporibus hic error sit
              deleniti inventore accusantium velit nesciunt officia aspernatur
              beatae fuga porro soluta deserunt iure veniam rem quibusdam.
              Officia fugit magni architecto quis dolorem adipisci laudantium
              dicta earum tenetur, error accusantium reiciendis sit nemo
              distinctio natus autem delectus. Dolore qui fugit sed dignissimos
              laudantium aut magni quisquam corrupti debitis sequi, eius
              veritatis ipsam sint est alias aliquam cum ullam. Perferendis,
              corrupti alias quos quibusdam repellat obcaecati veniam cum
              cumque. Tempora eos aperiam facilis quo quis debitis repellat
              neque inventore aliquid? Quod odio nulla iusto?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
