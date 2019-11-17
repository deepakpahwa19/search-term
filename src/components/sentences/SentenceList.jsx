import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Pagination from '../../UI/pagination/Pagination';
import Sentences from './Sentences';
import Instruction from '../../UI/Instruction';
import withSpinner from '../../hoc/withSpinner';

class SentenceList extends PureComponent {

    state = { allSentences: [], currentSentences: [], currentPage: null, totalPages: null }

    onPageChanged = data => {
        let { allSentences } = this.props;
        allSentences = Object.keys(allSentences);
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentSentences = allSentences.slice(offset, offset + pageLimit);
        this.setState({ currentPage, currentSentences, totalPages });
    }

    render() {
        let { allSentences } = this.props;
        const totalSentences = Object.keys(allSentences).length;
        if (!totalSentences) {
            return <Instruction />;
        }

        return (
            <Section>
                <Pagination totalRecords={totalSentences} pageLimit={30} pageNeighbours={2} onPageChanged={this.onPageChanged} />
                <Sentences currentSentences={this.state.currentSentences} countStarts={this.state.currentPage}></Sentences>
            </Section>
        );
    }


}

const mapStateToProps = state => {
    return {
        allSentences: state.sentences,
        loading: state.loading
    }
}

export default connect(mapStateToProps, null)(withSpinner(SentenceList));

const Section = styled.section`
    margin: auto;
    display: flex;
    flex-direction: column;
`;