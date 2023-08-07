import { customer } from "../../assets/data/data";
import { Heading } from "../../common/Heading";
import { ImQuotesRight } from "react-icons/im";

export const Testimonial = () => {
  return (
    <>
      <section className="customer">
        <Heading
          title="Chose The Plans"
          desc="Meet our newbies! The latest templates upload to the marketplace"
        />
        <div className="content">
          {customer.map((items) => (
            <div className="card" key={items.id}>
              <button>
                <ImQuotesRight />
              </button>
              <p>"{items.desc}"</p>
              <h3>{items.name}</h3>
              <span>{items.post}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
