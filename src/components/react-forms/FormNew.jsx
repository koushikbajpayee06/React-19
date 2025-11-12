
import NavBar from "../../controlled-components/NavBar";
export function FormNew() {


  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    for (var item of data) {
      console.log(item[1]);
    }
  }

  return (
    <div className="container-fluid">
        <header className="mt-3">
            <NavBar theme='bg-warning' brandTitle="Shopper." navItems={["Home","Shop","Pages","Blog","Docs"]}/>
        </header>
        <section>
            <NavBar theme='bg bg-dark text-white' brandTitle="Amazon" navItems={["Home","About","Mobiles","Fashion","Contact"]}/>
        </section>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <dl>
          <dt>User Name</dt>

          <dd>
            <input type="text" name="UserName" />
          </dd>

          <dt>Mobile</dt>

          <dd>
            <input type="text" name="Mobile" />
          </dd>
        </dl>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
