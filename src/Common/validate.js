import Swal from "sweetalert2";

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Success(message) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: message ? message : "Success!",
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        background: 'green',
        color: 'white'
    });
}

export function Error(message) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: message ? message : "Something went wrong!",
        showConfirmButton: false,
        timer: 4000,
        toast: true,
        background: '#e23f33',
        color: 'white',
        iconColor: '#e29f99'
    });
}