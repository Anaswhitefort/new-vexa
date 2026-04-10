import clsx from "clsx";
function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Abu Dhabi" invert={invert}>
          Vexa L.L.C
          <br />
          Falcon Tower<br /> Hamdan st<br /> Corner AirPort Road<br />
          Abu Dhabi,<br /> United Arab Emirates
        </Office>
      </li>
      <li>
        <Office name="Products & Services" invert={invert}>
          <a href="https://vexa.ae" target="_blank" rel="noopener noreferrer" className="hover:underline">Vexa Advertisments</a>
          <br />
          <a href="https://realty.vexa.ae" target="_blank" rel="noopener noreferrer" className="hover:underline">Vexa Realty</a>
          <br />
          <a href="https://lms.vexa.ae" target="_blank" rel="noopener noreferrer" className="hover:underline">Vexa LMS</a>
          <br />
          <a href="https://shopify.vexa.ae" target="_blank" rel="noopener noreferrer" className="hover:underline">Shopify</a>
          <br />
          <a href="https://proparts.ae" target="_blank" rel="noopener noreferrer" className="hover:underline">ProParts</a>
          <br />
          <a href="https://emiratiman.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">EmiratiMan AI</a>

        </Office>
      </li>
    </ul>
  );
};

export default Offices;
