import React, { Component } from 'react'
import { Grid, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

 const Summarycart = ({name,price,qty}) => {
        return (
            <div>
                <Paper style={{ marginTop: '3rem' }}>
                    <div className="checkout-step checkout-step--active">
                        <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj">3</span><span class="_1_m52b">Order Summary</span></h3>
                    </div>
                    <Grid container className="_30BGxP">
                        <Grid item xs={12} sm={12} md={12} xl={12} lg={12} className="summary_order_list">
                            <Grid container>
                                <Grid item xs={2} sm={2} md={2} xl={2} lg={2}>
                                    <div className="_3BTv9X" style={{ height: 94, width: 112 }}>
                                        <img className="_1Nyybr  _30XEf0" alt="rukim" src="/images/of1" />
                                    </div>

                                </Grid>
                                <Grid item xs={6} sm={6} md={6} xl={6} lg={6}>
                                    <div className="_3vIvU_bk">
                                        <div className="title">{name}</div>
                                        <div className="price_bk">
                                            <h5>&#8377;{price}</h5>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} xl={4} lg={4}>
                                    <div className="_3aZm8l">
                                        <div className="bzD9az">Delivery by Sat May 23 | <span className="_3ACFa6"><span className="_3o5jSD">Free</span></span><span class="_3ACFa6 _1wJt4G">₹40</span></div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
}

export default Summarycart;