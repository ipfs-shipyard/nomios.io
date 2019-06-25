import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LayoutContainer } from '../../layout';
import { status, rows } from './data';
import styles from './Roadmap.module.css';

class Roadmap extends PureComponent {
    render() {
        const { className } = this.props;

        return (
            <LayoutContainer id="roadmap" className={ classNames(styles.roadmap, className) }>
                <div className={ styles.title }>Roadmap</div>
                <div className={ styles.tableWrapper }>
                    <div className={ classNames(styles.tableRow, styles.headerRow) }>
                        <div className={ classNames(styles.tableCell, styles.headerItemLabel) }>Building phase</div>
                        <div className={ styles.tableHeader }>
                            {
                                status.map((el) => {
                                    const ElementIcon = el.icon;

                                    return (
                                        <div className={ styles.tableCell } key={ el.name }>
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
                            rows.map((el) => (
                                <div className={ styles.tableRow } key={ el.name }>
                                    <div className={ classNames(styles.tableCell, styles.itemLabel) }>
                                        { el.name }
                                    </div>
                                    <div className={ styles.itemStatus }>
                                        { el.status.map((stat, index) => (
                                            <div className={ classNames(styles.tableCell, styles.bodyLabel) } key={ index }>
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
            </LayoutContainer>
        );
    }
}

Roadmap.propTypes = {
    className: PropTypes.string,
};

export default Roadmap;
