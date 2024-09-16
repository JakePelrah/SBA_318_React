export default function Navbar() {


    return (<nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SE Jeopardy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Create Question</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Create Board</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}