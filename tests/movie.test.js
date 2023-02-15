import request from "supertest";
import app from "../index.js";

test("testing singlemovie render page", async() => {
    const response = await request(app)
        .get("/movies/2")
        .expect("content-type", "text/html; charset=utf-8")
        .expect(200);

    expect(
        response.text.includes({
            id: 2,
            title: "Encanto",
            imdbId: "tt2953050",
        })
    );
});