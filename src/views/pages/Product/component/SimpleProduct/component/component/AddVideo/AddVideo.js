import React from 'react'
import { Link } from 'react-router-dom'

export default function AddVideo() {
    return (
        <div>
            <div>


                <header>
                    <div>
                        <h3>New Video</h3>
                    </div>
                    <Link to="/SimpleProduct"><button>
                        X
                    </button></Link>
                </header>
                <div>
                    <p>Url</p>
                    <div>
                        <input></input>
                    </div>
                    <small>YouTube and Vimeo supported.</small>
                </div>
                <div>
                    <p>Title</p>
                    <div>
                        <input></input>
                    </div>
                </div>
                <div>
                    <p>Description</p>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
                <div>
                    <p>Preview Image</p>
                    <div>
                        <button>Choose File</button><small>No file chosen</small>
                    </div>
                </div>
                <div>
                    <p>Role</p>
                    <div>
                        <div>
                            <input type="checkbox" ></input>
                            <label>Base</label>
                        </div>
                        <div>
                            <input type="checkbox" ></input>
                            <label>Small</label>
                        </div>
                        <div>
                            <input type="checkbox" ></input>
                            <label>Swatch</label>
                        </div>
                    </div>

                </div>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="c-icon c-icon-6xl" role="img">
                <path fill="var(--ci-primary-color, currentColor)" d="M461,132,360,171.277V72H16V440H360V332.723L461,372h35V132Zm3,206.833-136-52.89V408H48V104H328V218.057l136-52.89Z" class="ci-primary"></path>
            </svg>
            </div>
        </div>
    )
}
