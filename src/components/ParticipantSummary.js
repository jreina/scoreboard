import React, {Component} from 'react'
import { ParticipantManager } from '../managers/ParticipantManager';

class ParticipantSummary extends Component {
    constructor(props) {
        super(props);
        this.participantMgr = new ParticipantManager();
        this.state = { prs: null };
    }

    componentDidMount() {
        this.participantMgr.load(this.props.username).then(prs => this.setState({ prs }));
    }

    render() {
        return <p>{this.state.prs}/4 Pull Requests</p>
    }
}

export default ParticipantSummary;