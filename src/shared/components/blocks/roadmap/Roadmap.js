import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Roadmap.module.css';
import { DoneIcon, DoingIcon, TodoIcon } from '../../icon';

const tableContents = {
    header: [
        {
            name: 'Done',
            icon: DoneIcon,
        },
        {
            name: 'Doing',
            icon: DoingIcon,
        },
        {
            name: 'To do',
            icon: TodoIcon,
        },
    ],
    rows: [
        {
            name: 'No plugins required',
            status: [1, 0, 0],
        },
        {
            name: 'Signing',
            status: [1, 0, 0],
        },
        {
            name: 'Mobile',
            status: [1, 1, 0],
        },
        {
            name: 'Authenticate',
            status: [1, 1, 0],
        },
        {
            name: 'Decentralized Identifiers (DIDs)',
            status: [1, 0, 0],
        },
        {
            name: 'Verifiable credentials',
            status: [1, 0, 1],
        },
        {
            name: 'Encryption between wallets',
            status: [1, 0, 1],
        },
        {
            name: 'Multi wallet',
            status: [1, 0, 1],
        },
        {
            name: 'Multi Identify',
            status: [1, 0, 1],
        },
    ],
};

const Roadmap = ({ className }) => (
    <div id="roadmap" className={ classNames(styles.roadmap, className) }>
        <div className={ styles.roadmapWrapper }>
            <div className={ styles.title }>
                Roadmap
            </div>
            <div className={ styles.tableWrapper }>
                <div className={ classNames(styles.tableRow, styles.headerRow) }>
                    <div className={ classNames(styles.tableLabel, styles.labelMobile) }>
                        Building phase
                    </div>
                    <div className={ styles.tableHeader }>
                        {
                            tableContents.header.map((el) => {
                                const ElementIcon = el.icon;

                                return (
                                    <div className={ styles.tableLabel } key={ el.name }>
                                        <div className={ styles.headerName }>{ el.name }</div>
                                        <ElementIcon className={ styles.tableHeaderIcon } />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={ styles.tableBody }>
                    {
                        tableContents.rows.map((el) => (
                            <div className={ styles.tableRow } key={ el.name }>
                                <div className={ classNames(styles.tableLabel, styles.rightSide) }>
                                    { el.name }
                                </div>
                                <div className={ styles.bodyStatus }>
                                    { el.status.map((stat, index) => (
                                        <div className={ classNames(styles.tableLabel, styles.bodyLabel) } key={ index }>
                                            { stat ?
                                                <div className={ styles.dot }>&#9679;</div> :
                                                <div className={ styles.dot }>&#9675;</div>
                                            }
                                        </div>
                                    )) }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
);

Roadmap.propTypes = {
    className: PropTypes.string,
};

export default Roadmap;
