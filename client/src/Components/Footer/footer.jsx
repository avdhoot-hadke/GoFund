import React from "react";

export default function Footer() {
  return (
    <footer class="footer bg-light">
      <div class="container ">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a href="/campaign" class="nav-link px-2 text-muted">
                Campaigns
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">&copy; 2024 Go Fund Company</p>
        </footer>
      </div>
    </footer>
  );
}
