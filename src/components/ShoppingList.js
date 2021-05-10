import React from "react";
import { Segment, Header, Grid, Image, Button } from "semantic-ui-react";
import { shoppingListData } from "../dummy/shopping_list";

const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
      <Grid centered columns={3} doubling>
        {shoppingListData &&
          shoppingListData.map((item) => (
            <Grid.Column key={item.title}>
              <Segment>
                <Image src={item.image} />
                <Header as="h1">{item.title}</Header>
                <p>{item.excerpt}</p>
                <Button primary basic as="a" href="/">
                  Learn more
                </Button>
              </Segment>
            </Grid.Column>
          ))}
      </Grid>
    </div>
  );
};

export default ShoppingList;
