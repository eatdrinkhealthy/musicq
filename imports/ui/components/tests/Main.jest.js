// TODO   add flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import Main from "../Main";

describe("<Main />", function () {
  it("matches render snaphot", function () {
    const MainWithChildElement = (<Main><div>some text</div></Main>);

    const tree = renderer.create(MainWithChildElement).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

