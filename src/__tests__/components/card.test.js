import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Card, Player } from "../../components";

const category = "series";
const slideRows = [
  {
    title: "Documentaries",
    data: [
      {
        genre: "documentaries",
        maturity: "18",
        slug: "tiger-king",
        description: "Tiger King description",
        id: "07adcf19-517f-41b4-8f8b-04fee694bce1",
        title: "Tiger King",
        docId: "IcRxJBanzE7nmIp2GMGb",
      },
    ],
  },
  {
    title: "Feel Good",
    data: [
      {
        title: "Juno",
        genre: "feel-good",
        description: "Juno description",
        maturity: "0",
        id: "a938b5a6-fe25-4a06-8050-353bc7146ccd",
        slug: "juno",
        docId: "4JDgdf5vE0K3YrW9ZnbP",
      },
    ],
  },
];

describe("<Card />", () => {
  let card;

  beforeEach(() => {
    card = (
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item
                  key={item.docId}
                  item={item}
                  data-testid={`${item.slug}-item-feature`}
                >
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );
  });

  afterEach(cleanup);

  it("Renders <Card /> with populated data", () => {
    const { container, queryByText } = render(card);

    expect(queryByText("Documentaries")).toBeTruthy();
    expect(queryByText("Tiger King")).toBeTruthy();
    expect(queryByText("Tiger King description")).toBeTruthy();

    expect(queryByText("Feel Good")).toBeTruthy();
    expect(queryByText("Juno")).toBeTruthy();
    expect(queryByText("Juno description")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders <Card /> and toggles the card feature", () => {
    const { container, queryByText, getByTestId, getByAltText } = render(card);

    expect(queryByText("PG")).toBeFalsy();
    userEvent.click(getByTestId("tiger-king-item-feature"));
    expect(queryByText("PG")).toBeTruthy();

    userEvent.click(getByAltText("close"));
    expect(queryByText("PG")).toBeFalsy();

    expect(queryByText("0")).toBeFalsy();
    userEvent.click(getByTestId("juno-item-feature"));
    expect(queryByText("0")).toBeTruthy();

    userEvent.click(getByAltText("close"));
    expect(queryByText("0")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
