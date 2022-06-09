export default function App({ Nodetech }) {
  return (
    <div>
      <h3>Node.js Frameworks and Tools</h3>
      <p>
        Node.js is a low-level platform. In order to make things easy and
        exciting for developers, thousands of libraries were built upon Node.js
        by the community. Many of those established over time as popular
        options. Here is a non-comprehensive list of the ones worth learning
      </p>
      <ul>
        {Nodetech.map((tech, index) => (
          <li key={index}>
            <span style={{ fontWeight: "bold" }}>{tech.name}</span>{" "}
            {+"\t:\t" + tech.descreption}
          </li>
        ))}
      </ul>
    </div>
  );
}
