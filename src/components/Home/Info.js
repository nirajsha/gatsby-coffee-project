import React from "react"
import { Link } from "gatsby"
import Title from "../GLobal/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae suscipit harum voluptates repellat, tenetur alias
              dolores nulla dignissimos explicabo reiciendis quidem velit
              asperiores sint illum placeat quas fugit tempore iste?
            </p>

            <Link to="/about1">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
