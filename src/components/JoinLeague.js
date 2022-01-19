function JoinLeague() {
    return (
        <div class="columns">
            <div class="column is-half">
                <section className="section" id="s-fullheight-100vh">
                    <form>
                        <div class="field">
                            <label class="label">Enter league name</label>
                            <div class="control">
                                <input class="input" style={{ width: "50%" }} type="text" />
                            </div>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-success">
                                    Create league
                                </button>
                            </p>
                        </div>
                    </form>
                    <br/>
                    <form>
                        <div class="field">
                            <label class="label">Search league code/name</label>
                            <div class="control">
                                <input class="input" style={{ width: "50%" }} type="text" />
                            </div>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-danger">
                                    Search
                                </button>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
            <div class="column is-half">
                <section className="section" id="s-fullheight-100vh">
                    <p>List of members here</p>
                </section>
            </div>
        </div>
    )
}

export default JoinLeague;