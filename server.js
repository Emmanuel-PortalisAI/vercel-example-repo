const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Add this to parse JSON bodies

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Root route that returns Hello World in H1 tag
app.get("/", (req, res) => {
  res.send(`
    <h1>Congrats! You've reached the root of this API</h1>
    <br>
    <p>
      You can test out other methods for making web gets and posts with parameters.<br>
      <strong>WEB_GET Examples:</strong>
    </p>
    <ul>
      <li>
        <b>WEB_GET URL param example:</b><br>
        <code>
          [[WEB_GET|https://webhook-tester-portalisai.vercel.app/dummyGetURLParams?name=&lt;yourNameHere&gt;&age=&lt;yourAgeHere&gt;]]
        </code>
      </li>
      <li>
        <b>WEB_GET JSON body param example:</b><br>
        <code>
          [[WEB_GET|https://webhook-tester-portalisai.vercel.app/dummyGetJSONBodyParams|name=&lt;yourNameHere&gt;|age=&lt;yourAgeHere&gt;]]
        </code>
      </li>
    </ul>
    <p>
      <strong>WEB_POST Examples:</strong>
    </p>
    <ul>
      <li>
        <b>WEB_POST URL param example:</b><br>
        <code>
          [[WEB_POST|https://webhook-tester-portalisai.vercel.app/dummyPostURLParams?name=&lt;yourNameHere&gt;&age=&lt;yourAgeHere&gt;]]
        </code>
      </li>
      <li>
        <b>WEB_POST JSON body param example:</b><br>
        <code>
          [[WEB_POST|https://webhook-tester-portalisai.vercel.app/dummyPostJSONBodyParams|name=&lt;yourNameHere&gt;|age=&lt;yourAgeHere&gt;]]
        </code>
      </li>
    </ul>
  `);
});

app.get("/dummyGetURLParams", (req, res) => {
  const name = req.query.name || "Guest";
  const age = req.query.age || "unknown";
  res.send({ message: `Hello ${name}, you are ${age} years old!` });
});

app.get("/dummyGetJSONBodyParams", (req, res) => {
  const { name, age } = req.body;
  const safeName = name || "Guest";
  const safeAge = age || "unknown";

  res.send({ message: `Hello ${safeName}, you are ${safeAge} years old!` });
});

app.post("/dummyPostURLParams", (req, res) => {
  const { name, age } = req.query;
  res.send({
    message: `WEB_POST for variables: name=${name || "undefined"}, age=${
      age || "undefined"
    } was sent (via URL params).`,
  });
});

app.post("/dummyPostJSONBodyParams", (req, res) => {
  const { name, age } = req.body;
  res.send({
    message: `WEB_POST for variables: name=${name || "undefined"}, age=${
      age || "undefined"
    } was sent (via JSON body).`,
  });
});
