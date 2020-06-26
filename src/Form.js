import React from 'react';

class Form extends React.Component {

    render() {

        return (
            <section>

                <div className="FormWrapper">
                    <p>Your token created successfully and ready for minting</p>
                    <p></p>
                    <div>
                        <h1>Token Minting</h1>
                        <span>Wallet</span>  <input type="text" name="wallet"   />
                        <span>Amount</span> <input type="text" name="amount"  />
                        <button type="button" >Mint Tokens</button>
                    </div>

                    <div>
                        <h1>Burn Tokens.</h1>
                        {/* <span>Wallet</span> <input type="text" name="walletBRN"  /> */}
                        <button >Burn</button>
                        {/* <h3> {this.state.reswalletBRN}</h3> */}
                    </div>

                    <div>
                        <h2>Check balance in the wallet.</h2>
                        {/* <span>Wallet</span> <input type="text" name="walletB" /> */}
                        <button>Get Balance</button>
                        {/* <h3>The total balance is {this.state.storageValue}</h3> */}
                    </div>


                    <div>
                        <h1>Add wallets in WhiteListing</h1>
                        {/* <span>Wallet</span> <input type="text" name="walletWL" /> */}
                        <button >Add to WhiteList</button>
                    </div>

                    <div>
                        <h1>Check wallet is whitlisteded or not .</h1>
                        {/* <span>Wallet</span> <input type="text" name="walletCWL" /> */}
                        <button>Check Whitelisting</button>
                        {/* <h3> {this.state.resWalletCWL}</h3> */}
                    </div>

                    <div>
                        <h1>Freeze Wallet</h1>
                        {/* <span>Wallet</span> <input type="text" name="walletFz" /> */}
                        <button >Freeze</button>
                    </div>

                    <div>
                        <h1>Check wallet is Freezed or not .</h1>
                        {/* <span>Wallet</span> <input type="text" name="walletCWL"  /> */}
                        <button >Is Freezed</button>
                        {/* <h3> {this.state.resWalletCFz}</h3> */}
                    </div>


                </div>




            </section>


        )
    }

}

export default Form;