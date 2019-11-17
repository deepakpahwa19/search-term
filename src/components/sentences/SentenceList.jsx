import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Pagination from '../../UI/pagination/Pagination';
import Sentences from './Sentences';
import withSpinner from '../../hoc/withSpinner';
import { Message } from '../../UI';

class SentenceList extends PureComponent {

    state = { allSentences: [], currentSentences: [], currentPage: null, totalPages: null }

    // eventHandler to trigger whenever a button is clicked in Pagination component
    onPageChangedHandler = data => {
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
        return (
            totalSentences ?
                <Section>
                    <Pagination totalRecords={totalSentences} pageLimit={30} pageNeighbours={2} onPageChanged={this.onPageChangedHandler} />
                    <Sentences currentSentences={this.state.currentSentences} countStarts={this.state.currentPage}></Sentences>
                </Section> : <Message />
        );
    }


}

const mapStateToProps = state => {
    return {
        allSentences: state.sentences,
        loading: state.loading,
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps, null)(withSpinner(SentenceList));

const Section = styled.section`
    margin: auto;
    display: flex;
    flex-direction: column;
`;