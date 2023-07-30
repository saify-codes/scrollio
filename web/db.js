import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

export function insertData(
  border_size,
  border_color,
  border_radius,
  background_color,
  font_size,
  font_color,
  font_family,
  font_style,
  button_text
) {
  const query = "INSERT INTO styles VALUES (null,?,?,?,?,?,?,?,?,?)";
  connection.query(
    query,
    [
      border_size,
      border_color,
      border_radius,
      background_color,
      font_size,
      font_color,
      font_family,
      font_style,
      button_text,
    ],
    (err, res, fields) => {
      console.log(err);
      console.log(res);
      console.log(fields);
    }
  );
}

export function getStyles(callback) {
  const query =
    "SELECT `border_size`, `border_color`, `border_radius`, `background_color`, `font_size`, `font_color`, `font_family`, `font_style`, `button_text` FROM `styles` ORDER BY id DESC LIMIT 1";

  connection.query(query, (err, res, fields) => {
    if (err) {
      return callback(err, null); // Pass the error to the callback
    }

    const styles = res[0]; // Assuming you expect only one row from the query

    // Call the callback with the result
    callback(null, styles);
  });
}
