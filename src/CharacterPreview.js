// @flow

import React, { Component } from 'react';

type CharacterPreviewProps = {
    name: string,
    realm: string,
    region: string
};

type MythicPlusScores = {
    all: number,
    dps: number,
    healer: number,
    tank: number
}

type CharacterPreviewState = {
    mythicPlusScores: MythicPlusScores
};

class CharacterPreview extends Component<CharacterPreviewProps, CharacterPreviewState> {
    render() {
        const { name, realm, region} = this.props;
        return <div> {name} - {realm} ({region}). Score: {this.state ? this.state.mythicPlusScores.all : "???"} </div>;
    }

    componentDidMount() {
        const component = this;

        fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Ner'zhul&name=Sevv&fields=mythic_plus_scores")
            .then(response => response.json())
            .then(function(profile) {
                const {all, dps, healer, tank} = profile.mythic_plus_scores;
                component.setState({mythicPlusScores: { all, dps, healer, tank}});
            });
    }
}

export default CharacterPreview;