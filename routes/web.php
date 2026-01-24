<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ThemeSettingController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/subscriptions', function () {
    return Inertia::render('Subscribe');
})->name('subscriptions');

Route::get('/cart', function () {
    return Inertia::render('Cart');
})->name('cart');

Route::get('/more', function () {
    return Inertia::render('More');
})->name('more');

Route::get('/products', function () {
    return Inertia::render('products/Category', ['category' => 'ghee']);
})->name('products');

Route::get('/products/{category}', function ($category) {
    return Inertia::render('products/Category', ['category' => $category]);
})->name('products.category');

Route::get('/deliveries', function () {
    return Inertia::render('Deliveries');
})->name('deliveries');

Route::get('/wallet', function () {
    return Inertia::render('Wallet');
})->name('wallet');

Route::get('/support', function () {
    return Inertia::render('Support');
})->name('support');

Route::get('/address', function () {
    return Inertia::render('AddressBook');
})->name('address');

// Placeholder routes for other links to avoid 404s
Route::get('/orders', function () {
    return redirect()->route('deliveries');
});

Route::get('/transactions', function () {
    return Inertia::render('More'); // Point to More page as placeholder
});

Route::get('/refer', function () {
    return Inertia::render('More');
});

Route::get('/account', function () {
    return Inertia::render('More');
});

Route::get('/service-area', function () {
    return Inertia::render('More');
});

Route::get('/policy', function () {
    return Inertia::render('More');
});

Route::get('/bills', function () {
    return Inertia::render('More');
});

Route::get('/verify-otp', function () {
    return Inertia::render('Admin/Auth/VerifyOtp');
})->name('admin.otp.verify');

Route::get('/forgot-password', function () {
    return Inertia::render('Admin/Auth/ForgotPassword');
})->name('admin.forgot.password');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('customer.login');

Route::middleware(['web', 'guest.admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store');
});

Route::middleware(['web', 'auth.admin', 'ensure.admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/settings', [ThemeSettingController::class, 'edit'])->name('settings');
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');
    Route::get('/theme', [ThemeSettingController::class, 'edit'])->name('theme.edit');
    Route::put('/theme', [ThemeSettingController::class, 'update'])->name('theme.update');
    Route::get('/subscriptions', function () {
        return Inertia::render('Admin/Subscriptions/Index');
    })->name('subscriptions.index');
    Route::get('/subscriptions/create', function () {
        return Inertia::render('Admin/Subscriptions/Create');
    })->name('subscriptions.create');
    Route::get('/customers', function () {
        return Inertia::render('Admin/Customers/Index');
    })->name('customers.index');
    Route::get('/payments', function () {
        return Inertia::render('Admin/Payments/Index');
    })->name('payments.index');
     Route::get('/orders', function () {
        return Inertia::render('Admin/Orders/Index');
    })->name('orders.index');
     Route::get('/delivery', function () {
        return Inertia::render('Admin/Delivery/Index');
    })->name('delivery.index');
    Route::get('/marketing', function () {
        return Inertia::render('Admin/Marketing/Index');
    })->name('marketing.index');
    Route::get('/utilities', function () {
        return Inertia::render('Admin/Utilities/Index');
    })->name('utilities.index');
    Route::get('/bills', function () {
        return Inertia::render('Admin/Bills/Index');
    })->name('bills.index');
    Route::get('/reports', function () {
        return Inertia::render('Admin/Reports/Index');
    })->name('reports.index');
});
